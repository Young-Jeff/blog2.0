'use server';

import dayjs from 'dayjs';

import {
  REDIS_BLOG_UNIQUE_VISITOR,
  REDIS_PAGE_VIEW,
  REDIS_UNIQUE_VISITOR,
} from '@/constants';
import { prisma } from '@/lib/prisma';
import { redis } from '@/lib/redis';

export const getStatistics = async () => {
  const blogCount = await prisma.blog.count({
    where: { published: true },
  });
  const tagCount = await prisma.tag.count();

  const projectCount = await prisma.project.count({
    where: { published: true },
  });

  const noteCount = await prisma.note.count({
    where: { published: true },
  });

  return { blogCount, projectCount, tagCount, noteCount };
};

const getTodayKey = (baseKey: string) => {
  const today = dayjs().format('yyyy-MM-dd');
  return `${baseKey}:${today}`;
};

export const recordTodayPV = async () => {
  const todayKey = getTodayKey(REDIS_PAGE_VIEW);
  const pv = await redis.get(todayKey);

  if (pv) {
    await redis.incr(todayKey);
  } else {
    await redis.set(todayKey, 1);
  }
};

export const getTodayPV = async () => {
  const todayKey = getTodayKey(REDIS_PAGE_VIEW);
  const pv = await redis.get(todayKey);
  return pv ? parseInt(pv, 10) : 0;
};

export const recordTodayUV = async (cid?: string) => {
  if (!cid) {
    return;
  }
  const todayKey = getTodayKey(REDIS_UNIQUE_VISITOR);
  await redis.sadd(todayKey, cid);
};

export const getTodayUV = async () => {
  const todayKey = getTodayKey(REDIS_UNIQUE_VISITOR);
  const uv = await redis.scard(todayKey);
  return uv;
};

export const recordPV = async () => {
  const pv = await redis.get(REDIS_PAGE_VIEW);

  if (pv) {
    await redis.incr(REDIS_PAGE_VIEW);
  } else {
    await redis.set(REDIS_PAGE_VIEW, 1);
  }
};

export const getPV = async () => {
  const pv = await redis.get(REDIS_PAGE_VIEW);
  return pv;
};

export const recordUV = async (cid?: string) => {
  if (!cid) {
    return;
  }
  await redis.sadd(REDIS_UNIQUE_VISITOR, cid);
};

export const getUV = async () => {
  const uv = await redis.scard(REDIS_UNIQUE_VISITOR);
  return uv;
};

export const recordBlogUV = async (blogID?: string, cid?: string) => {
  if (!blogID || !cid) {
    return;
  }
  await redis.sadd(`${REDIS_BLOG_UNIQUE_VISITOR}:${blogID}`, cid);
};

export const getBlogUV = async (blogID?: string) => {
  if (!blogID) {
    return;
  }
  const uv = await redis.scard(`${REDIS_BLOG_UNIQUE_VISITOR}:${blogID}`);
  return uv;
};

export const batchGetBlogUV = async (blogIDs?: string[]) => {
  if (!blogIDs?.length) {
    return;
  }

  const m = new Map<string, number>();

  const uvs = await Promise.all(
    blogIDs.map((el) => redis.scard(`${REDIS_BLOG_UNIQUE_VISITOR}:${el}`)),
  );
  let idx = 0;
  for (const uv of uvs) {
    m.set(blogIDs[idx]!, uv);
    idx++;
  }

  return m;
};
