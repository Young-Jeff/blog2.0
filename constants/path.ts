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
  [PATHS.SITE_HOME]: '首页',
  [PATHS.SITE_BLOG]: '博客',
  [PATHS.SITE_PROJECT]: '项目',
  [PATHS.SITE_SERVICES]: '开发服务',
  [PATHS.SITE_ABOUT]: '关于',
  [PATHS.SITEMAP]: '站点地图',

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

export const PATH_DESCRIPTION_MAP: Record<string, string> = {
  /** ************* SITE ****************** */
  [PATHS.SITE_HOME]: '首页',
  [PATHS.SITE_BLOG]: '这里记录了我的想法、文章，希望和大家一起交流～',
  [PATHS.SITE_PROJECT]:
    '学而无用，不如学而用之。这里是我在技术领域中努力实践和应用的最佳证明。',
  [PATHS.SITE_SERVICES]:
    '提供专业的技术解决方案，从全栈开发到区块链应用，助力您的业务快速发展',
  [PATHS.SITE_ABOUT]: `叮～ 你有一份关于${NICKNAME}的简介，请查收～`,

  /** ************* ADMIN ****************** */
  [PATHS.ADMIN_HOME]: '欢迎回来，要努力学习嗷～',
  [PATHS.ADMIN_STATISTIC]: '聚合本站的所有统计数据',
  [PATHS.ADMIN_BLOG]: `博客管理，在这里对 博客进行 增、删、改、查操作`,
  [PATHS.ADMIN_BLOG_CREATE]: '在这里尽情地创作吧！',
  [PATHS.ADMIN_BLOG_EDIT]:
    '世界破破烂烂，博客修修补补，好的文章总是需要反复打磨的',
  [PATHS.ADMIN_PROJECT]: `项目管理，在这里对项目进行 增、删、改、查操作`,
  [PATHS.ADMIN_PROJECT_CREATE]:
    '学而无用，不如学而用之。这里是我在技术领域中努力实践和应用的最佳证明。',
  [PATHS.ADMIN_PROJECT_EDIT]: '修修补补，总比没有好',
  [PATHS.ADMIN_TAG]: `标签管理，在这里对标签进行 增、删、改、查操作`,
  [PATHS.ADMIN_NOTE]: '好记性不如烂笔头，灵感一闪',

  /** ************* AUTH ****************** */
  [PATHS.AUTH_SIGNIN]: '登录',
};
