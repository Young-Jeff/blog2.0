import { PageHeader } from '@/components/page-header';

import { PATHS } from '@/constants';

import { AdminContentLayout, CreateProjectForm } from '../../components';

export const CreateProjectPage = () => {
  return (
    <AdminContentLayout
      pageHeader={
        <PageHeader
          breadcrumbList={[
            PATHS.ADMIN_HOME,
            PATHS.ADMIN_PROJECT,
            PATHS.ADMIN_PROJECT_CREATE,
          ]}
        />
      }
    >
      <CreateProjectForm />
    </AdminContentLayout>
  );
};
