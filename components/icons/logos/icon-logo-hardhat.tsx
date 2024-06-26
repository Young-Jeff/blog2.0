import React from 'react';

import { cn } from '@/lib/utils';

export const IconLogoHardhat = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      {...props}
      className={cn('icon-[logos--hardhat-icon]', className)}
    ></span>
  );
};
