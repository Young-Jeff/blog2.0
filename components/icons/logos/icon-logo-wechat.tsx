import React from 'react';

import { cn } from '@/lib/utils';

export const IconLogoWechat = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      {...props}
      className={cn('icon-[ic--baseline-wechat]', className)}
    ></span>
  );
};
