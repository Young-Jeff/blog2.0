import { getTranslations } from 'next-intl/server';

import { PATHS, PATHS_MAP } from '@/constants';
import { AdminStatisticPage } from '@/features/admin';

export const generateMetadata = async () => {
  const t = await getTranslations('admin');
  return {
    title: `${t(PATHS_MAP[PATHS.ADMIN_STATISTIC]!)} - ${t('ManagementSystem')}`,
  };
};

export default function Page() {
  return <AdminStatisticPage />;
}
