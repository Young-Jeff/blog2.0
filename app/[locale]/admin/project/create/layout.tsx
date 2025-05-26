import React from 'react';

import { getTranslations } from 'next-intl/server';

import { PATHS, PATHS_MAP } from '@/constants';

export const generateMetadata = async () => {
  const t = await getTranslations('admin');
  return {
    title: `${t(PATHS_MAP[PATHS.ADMIN_PROJECT_CREATE]!)} - ${t(
      'ManagementSystem',
    )}`,
  };
};

export default function Layout({ children }: React.PropsWithChildren) {
  return <>{children}</>;
}
