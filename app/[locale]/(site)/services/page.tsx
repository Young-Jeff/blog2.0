import { PageHeader } from '@/components/page-header';

import { PATHS } from '@/constants';
import { ServicePage } from '@/features/services';

export default function Services() {
  return (
    <div className="w-full flex flex-col justify-center px-6 md:max-w-screen-md  2xl:max-w-6xl  md:mx-auto pb-24 pt-8">
      <PageHeader
        breadcrumbList={[PATHS.SITE_HOME, PATHS.SITE_SERVICES]}
        className="mb-9"
      />

      <ServicePage />
    </div>
  );
}
