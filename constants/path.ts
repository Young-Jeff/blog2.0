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
  [PATHS.ADMIN_HOME]: 'Home',
  [PATHS.ADMIN_STATISTIC]: 'Statistic',
  [PATHS.ADMIN_BLOG]: 'Blog',
  [PATHS.ADMIN_BLOG_CREATE]: 'Blog Create',
  [PATHS.ADMIN_BLOG_EDIT]: 'Blog Edit',
  [PATHS.ADMIN_PROJECT]: 'Project',
  [PATHS.ADMIN_PROJECT_CREATE]: 'Project Create',
  [PATHS.ADMIN_PROJECT_EDIT]: 'Project Edit',
  [PATHS.ADMIN_TAG]: 'Tag',
  [PATHS.ADMIN_NOTE]: 'Note',

  /** ************* AUTH ****************** */
  [PATHS.AUTH_SIGNIN]: 'Signin',
};
