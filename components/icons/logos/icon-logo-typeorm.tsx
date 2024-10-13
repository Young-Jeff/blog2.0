import React from 'react';

import { cn } from '@/lib/utils';

export const IconLogoTypeorm = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span {...props} className={cn('icon-[logos--typeorm]', className)}></span>
  );
};
