import React from 'react';

import { getTranslations } from 'next-intl/server';

import { IllustrationConstruction } from '@/components/illustrations';
import { PageHeader } from '@/components/page-header';

import { PATHS } from '@/constants';

import { AdminContentLayout } from '../../components';

export const AdminHomePage = async () => {
  const t = await getTranslations('admin');
  return (
    <AdminContentLayout
      pageHeader={<PageHeader breadcrumbList={[PATHS.ADMIN_HOME]} />}
    >
      <div className="grid place-content-center mt-[18vh]">
        <IllustrationConstruction className="w-[320px] h-[320px]" />
        <h3 className="text-2xl font-semibold tracking-tight text-center">
          {t('underDevelopment')}
        </h3>
      </div>
    </AdminContentLayout>
  );
};
