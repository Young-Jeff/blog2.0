'use client';

import { WEBSITE } from '@/constants';
import { cn } from '@/lib/utils';

export const IconLogo = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLImageElement>) => {
  return (
    <img
      {...props}
      src="/images/favicon.ico"
      className={cn('w-6 h-6', className)}
      alt={WEBSITE}
    />
  );
};
