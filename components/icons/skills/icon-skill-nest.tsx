import React from 'react';

import { cn } from '@/lib/utils';

export const IconSkillNestDark = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      {...props}
      className={cn('icon-[skill-icons--nestjs-dark]', className)}
    ></span>
  );
};

export const IconSkillNestLight = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      {...props}
      className={cn('icon-[skill-icons--nestjs-light]', className)}
    ></span>
  );
};
