import React from 'react';

import { cn } from '@/lib/utils';

export const IconLogoRedis = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span {...props} className={cn('icon-[logos--redis]', className)}></span>
  );
};
