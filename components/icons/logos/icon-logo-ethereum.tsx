import React from 'react';

import { cn } from '@/lib/utils';

export const IconLogoEthereum = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span {...props} className={cn('icon-[logos--ethereum]', className)}></span>
  );
};
