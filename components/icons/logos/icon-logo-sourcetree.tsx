import React from 'react';

import { cn } from '@/lib/utils';

export const IconLogoSourcetree = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      {...props}
      className={cn('icon-[logos--sourcetree]', className)}
    ></span>
  );
};
