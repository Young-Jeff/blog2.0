import React from 'react';

import Link from 'next/link';

import { PATHS_MAP } from '@/constants';
import { cn } from '@/lib/utils';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '../ui/breadcrumb';

type PageHeaderProps = {
  breadcrumbList?: string[];
  className?: string;
  action?: React.ReactNode;
};

export const PageHeader = ({
  breadcrumbList,
  className,
  action,
}: PageHeaderProps) => {
  if (!breadcrumbList?.length) {
    return null;
  }

  const linkList = breadcrumbList.slice(0, breadcrumbList.length - 1);
  const labelLink = breadcrumbList[breadcrumbList.length - 1]!;

  return (
    <div className={cn('relative', className)}>
      <Breadcrumb className={cn('mb-2')}>
        <BreadcrumbList>
          {linkList.map((el) => (
            <React.Fragment key={el}>
              <BreadcrumbItem>
                <BreadcrumbLink>
                  <Link href={el}>{PATHS_MAP[el]}</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
            </React.Fragment>
          ))}
          <BreadcrumbItem>
            <BreadcrumbPage>{PATHS_MAP[labelLink]}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="absolute bottom-0 right-0">{action}</div>
    </div>
  );
};
