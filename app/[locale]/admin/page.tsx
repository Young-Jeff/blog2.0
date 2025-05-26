import { getTranslations } from 'next-intl/server';

import { PATHS, PATHS_MAP } from '@/constants';
import { AdminHomePage } from '@/features/admin';

export const generateMetadata = async () => {
  const t = await getTranslations('admin');
  return {
    title: `${t(PATHS_MAP[PATHS.ADMIN_HOME]!)} - ${t('ManagementSystem')}`,
  };
};
export default function Page() {
  return <AdminHomePage />;
}
