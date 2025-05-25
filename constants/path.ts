import { NICKNAME } from '.';

export const PATHS = {
  /** ************* SITE ****************** */
  SITE_HOME: '/',
  SITE_BLOG: '/blog',
  SITE_PROJECT: '/project',
  SITE_SERVICES: '/services',
  SITE_ABOUT: '/about',
  SITEMAP: '/sitemap.xml',

  /** ************* ADMIN ****************** */
  ADMIN_HOME: '/admin',
  ADMIN_STATISTIC: '/admin/statistic',

  ADMIN_BLOG: '/admin/blog',
  ADMIN_BLOG_CREATE: '/admin/blog/create',
  ADMIN_BLOG_EDIT: '/admin/blog/edit',

  ADMIN_PROJECT: '/admin/project',
  ADMIN_PROJECT_CREATE: '/admin/project/create',
  ADMIN_PROJECT_EDIT: '/admin/project/edit',

  ADMIN_TAG: '/admin/tag',
  ADMIN_NOTE: '/admin/note',

  /** ************* AUTH ****************** */
  AUTH_SIGNIN: '/auth/signin',
  NEXT_AUTH_SIGNIN: '/api/auth/signin',
};

export const PATHS_MAP: Record<string, string> = {
  /** ************* SITE ****************** */
  [PATHS.SITE_HOME]: 'Home',
  [PATHS.SITE_BLOG]: 'Blog',
  [PATHS.SITE_PROJECT]: 'Project',
  [PATHS.SITE_SERVICES]: 'Dev Services',
  [PATHS.SITE_ABOUT]: 'About',
  [PATHS.SITEMAP]: 'Sitemap',

  /** ************* ADMIN ****************** */
  [PATHS.ADMIN_HOME]: '首页',
  [PATHS.ADMIN_STATISTIC]: '统计',
  [PATHS.ADMIN_BLOG]: '博客',
  [PATHS.ADMIN_BLOG_CREATE]: '创建博客',
  [PATHS.ADMIN_BLOG_EDIT]: '编辑博客',
  [PATHS.ADMIN_PROJECT]: '项目',
  [PATHS.ADMIN_PROJECT_CREATE]: '创建项目',
  [PATHS.ADMIN_PROJECT_EDIT]: '编辑项目',
  [PATHS.ADMIN_TAG]: '标签',
  [PATHS.ADMIN_NOTE]: '笔记',

  /** ************* AUTH ****************** */
  [PATHS.AUTH_SIGNIN]: '登录',
};
