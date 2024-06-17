import { PageHeader } from '@/components/page-header';

import { PATHS } from '@/constants';

import { AdminContentLayout, EditProjectForm } from '../../components';

export const EditProjectPage = () => {
  return (
    <AdminContentLayout
      pageHeader={
        <PageHeader
          breadcrumbList={[
            PATHS.ADMIN_HOME,
            PATHS.ADMIN_PROJECT,
            PATHS.ADMIN_PROJECT_EDIT,
          ]}
        />
      }
    >
      <EditProjectForm />
    </AdminContentLayout>
  );
};
