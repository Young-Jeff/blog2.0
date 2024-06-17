import { type ISitemapField, getServerSideSitemap } from 'next-sitemap';

import { SITE_URL } from '@/config';

import { PATHS } from '@/constants';
import { prisma } from '@/lib/prisma';

export async function GET() {
  const blogs = await prisma.blog.findMany({
    select: {
      slug: true,
      createdAt: true,
      updatedAt: true,
    },
    where: {
      published: true,
    },
  });
  const projects = await prisma.project.findMany({
    select: {
      slug: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  const blogsSitemaps = blogs.map((item): ISitemapField => {
    return {
      loc: `${SITE_URL}${PATHS.SITE_BLOG}/${item.slug}`,
      lastmod: new Date(item.updatedAt ?? item.createdAt).toISOString(),
      changefreq: 'hourly',
    };
  });
  const projectsSitemaps = projects.map((item): ISitemapField => {
    return {
      loc: `${SITE_URL}${PATHS.SITE_PROJECT}/${item.slug}`,
      lastmod: new Date(item.updatedAt ?? item.createdAt).toISOString(),
      changefreq: 'hourly',
    };
  });

  return getServerSideSitemap([...blogsSitemaps, ...projectsSitemaps]);
}
