import React from 'react';

import { cn } from '@/lib/utils';

export const IconLogoEth = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      {...props}
      className={cn('icon-[token-branded--eth]', className)}
    ></span>
  );
};
