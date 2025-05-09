import { PATHS, PATHS_MAP } from '@/constants';

export const navItems: Array<{
  label?: string;
  link: string;
  external?: boolean;
}> = [
  {
    label: PATHS_MAP[PATHS.SITE_HOME],
    link: PATHS.SITE_HOME,
  },
  {
    label: PATHS_MAP[PATHS.SITE_SERVICES], // 新增服务导航
    link: PATHS.SITE_SERVICES,
  },
  {
    label: PATHS_MAP[PATHS.SITE_PROJECT],
    link: PATHS.SITE_PROJECT,
  },

  {
    label: PATHS_MAP[PATHS.SITE_BLOG],
    link: PATHS.SITE_BLOG,
  },
  {
    label: PATHS_MAP[PATHS.SITE_ABOUT],
    link: PATHS.SITE_ABOUT,
  },
];
