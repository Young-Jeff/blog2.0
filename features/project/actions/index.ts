'use server';

import { type Prisma } from '@prisma/client';
import { isUndefined } from 'lodash-es';

import { ERROR_NO_PERMISSION, PUBLISHED_MAP } from '@/constants';
import { noPermission } from '@/features/user';
import { prisma } from '@/lib/prisma';
import { getSkip } from '@/utils';

import {
  type CreateProjectDTO,
  type GetProjectsDTO,
  type UpdateProjectDTO,
  createProjectSchema,
  getProjectsSchema,
  updateProjectSchema,
} from '../types';

export const isProjectExistByID = async (id: string): Promise<boolean> => {
  const isExist = await prisma.project.findUnique({ where: { id } });

  return Boolean(isExist);
};

export const getProjects = async (params: GetProjectsDTO) => {
  const result = await getProjectsSchema.safeParseAsync(params);

  if (!result.success) {
    const error = result.error.format()._errors?.join(';');
    // TODO: 记录日志
    throw new Error(error);
  }

  // 无权限，只能查看已发布的
  const published = await noPermission();
  const cond: Prisma.ProjectWhereInput = {};
  // TODO: 想个办法优化一下，这个写法太啰嗦了，好多 if
  if (published || !isUndefined(result.data.published)) {
    const searchPublished: boolean | undefined =
      PUBLISHED_MAP[result.data.published!];

    if (!isUndefined(searchPublished)) {
      cond.published = searchPublished;
    }

    if (published) {
      cond.published = published;
    }
  }
  if (result.data.title?.trim()) {
    cond.OR = [
      ...(cond.OR ?? []),
      ...[
        {
          title: {
            contains: result.data.title?.trim(),
          },
        },
      ],
    ];
  }
  if (result.data.slug?.trim()) {
    cond.OR = [
      ...(cond.OR ?? []),
      ...[
        {
          slug: {
            contains: result.data.slug?.trim(),
          },
        },
      ],
    ];
  }
  if (result.data.tags?.length) {
    cond.OR = [
      ...(cond.OR ?? []),
      ...[
        {
          tags: {
            some: {
              id: {
                in: result.data.tags,
              },
            },
          },
        },
      ],
    ];
  }

  const sort: Prisma.ProjectOrderByWithRelationInput = {};
  if (result.data.orderBy && result.data.order) {
    sort[result.data.orderBy] = result.data.order;
  }

  const total = await prisma.project.count({ where: cond });
  const projects = await prisma.project.findMany({
    include: {
      tags: true,
    },
    orderBy: sort,
    where: cond,
    take: result.data.pageSize,
    skip: getSkip(result.data.pageIndex, result.data.pageSize),
  });

  return { projects, total };
};

export const getAllProjects = async () => {
  const total = await prisma.project.count({});
  const projects = await prisma.project.findMany({
    orderBy: {
      createdAt: 'desc',
    },
    where: {
      published: true,
    },
    include: {
      tags: true,
    },
  });

  return { projects, total };
};

export const getProjectByID = async (id: string) => {
  const project = await prisma.project.findUnique({
    where: { id },
    include: {
      tags: true,
    },
  });

  return { project };
};

export const getProjectBySlug = async (slug: string) => {
  const project = await prisma.project.findUnique({
    where: { slug, published: true },
    include: {
      tags: true,
    },
  });

  return { project };
};

export const deleteProjectByID = async (id: string) => {
  if (await noPermission()) {
    throw ERROR_NO_PERMISSION;
  }

  const isExist = await isProjectExistByID(id);

  if (!isExist) {
    throw new Error('Project不存在');
  }

  await prisma.project.delete({
    where: {
      id,
    },
  });
};

export const createProject = async (params: CreateProjectDTO) => {
  if (await noPermission()) {
    throw ERROR_NO_PERMISSION;
  }
  const result = await createProjectSchema.safeParseAsync(params);

  if (!result.success) {
    const error = result.error.format()._errors?.join(';');
    // TODO: 记录日志
    throw new Error(error);
  }

  const projects = await prisma.project.findMany({
    where: {
      OR: [{ title: result.data.title }, { slug: result.data.slug }],
    },
  });

  if (projects.length) {
    // TODO: 记录日志
    throw new Error('标题或者slug重复');
  }

  await prisma.project.create({
    data: {
      title: result.data.title,
      slug: result.data.slug,
      description: result.data.description,
      published: result.data.published,
      cover: result.data.cover,
      codeUrl: result.data.codeUrl,
      previewUrl: result.data.previewUrl,
      author: result.data.author,
      tags: {
        connect: result.data.tags
          ? result.data.tags.map((tagID) => ({ id: tagID }))
          : undefined,
      },
    },
  });
};

export const toggleProjectPublished = async (id: string) => {
  if (await noPermission()) {
    throw ERROR_NO_PERMISSION;
  }
  const project = await prisma.project.findUnique({
    where: {
      id,
    },
  });

  if (!project) {
    throw new Error('项目不存在');
  }

  await prisma.project.update({
    data: {
      published: !project.published,
    },
    where: {
      id,
    },
  });
};

export const updateProject = async (params: UpdateProjectDTO) => {
  if (await noPermission()) {
    throw ERROR_NO_PERMISSION;
  }
  const result = await updateProjectSchema.safeParseAsync(params);

  if (!result.success) {
    const error = result.error.format()._errors?.join(';');
    // TODO: 记录日志
    throw new Error(error);
  }

  const project = await prisma.project.findUnique({
    where: {
      id: result.data.id,
    },
    include: { tags: true },
  });

  if (!project) {
    throw new Error('Project不存在');
  }

  const projectTagIDs = project?.tags.map((el) => el.id);
  // 新增的 tags
  const needConnect = result.data.tags?.filter(
    (el) => !projectTagIDs?.includes(el),
  );
  // 需要移除的 tags
  const needDisconnect = project?.tags
    .filter((el) => !result.data.tags?.includes(el.id))
    ?.map((el) => el.id);

  await prisma.project.update({
    data: {
      title: result.data.title,
      description: result.data.description,
      slug: result.data.slug,
      published: result.data.published,
      cover: result.data.cover,
      codeUrl: result.data.codeUrl,
      previewUrl: result.data.previewUrl,
      author: result.data.author,
      tags: {
        connect: needConnect?.length
          ? needConnect.map((tagID) => ({ id: tagID }))
          : undefined,
        disconnect: needDisconnect?.length
          ? needDisconnect.map((tagID) => ({ id: tagID }))
          : undefined,
      },
    },
    where: {
      id: result.data.id,
    },
  });
};
