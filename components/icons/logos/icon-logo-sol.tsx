import React from 'react';

import { cn } from '@/lib/utils';

export const IconLogoSol = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      {...props}
      className={cn('icon-[token-branded--sol]', className)}
    ></span>
  );
};
