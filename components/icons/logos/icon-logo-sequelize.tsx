import React from 'react';

import { cn } from '@/lib/utils';

export const IconLogoSequelize = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      {...props}
      className={cn('icon-[logos--sequelize]', className)}
    ></span>
  );
};
