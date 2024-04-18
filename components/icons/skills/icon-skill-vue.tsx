import React from 'react';

import { cn } from '@/lib/utils';

export const IconSkillVueDark = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      {...props}
      className={cn('icon-[skill-icons--vuejs-dark]', className)}
    ></span>
  );
};

export const IconSkillVueLight = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      {...props}
      className={cn('icon-[skill-icons--vuejs-light]', className)}
    ></span>
  );
};
