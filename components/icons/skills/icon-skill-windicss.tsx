import React from 'react';

import { cn } from '@/lib/utils';

export const IconSkillWindicssDark = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      {...props}
      className={cn('icon-[skill-icons--windicss-dark]', className)}
    ></span>
  );
};

export const IconSkillWindicssLight = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      {...props}
      className={cn('icon-[skill-icons--windicss-light]', className)}
    ></span>
  );
};
