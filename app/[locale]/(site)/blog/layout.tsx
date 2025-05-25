import React from 'react';

import { type Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { PATHS, PATHS_MAP } from '@/constants';

export const generateMetadata = async () => {
  const t = await getTranslations('common');
  return {
    title: t(PATHS_MAP[PATHS.SITE_BLOG] as string),
  };
};

export default function Layout({ children }: React.PropsWithChildren) {
  return <>{children}</>;
}
