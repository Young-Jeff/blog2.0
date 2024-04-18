import React from 'react';

import { cn } from '@/lib/utils';

export const IconLogoEthers = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span {...props} className={cn('icon-[logos--ethers]', className)}></span>
  );
};
