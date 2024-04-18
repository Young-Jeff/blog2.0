import React from 'react';

import { cn } from '@/lib/utils';

export const IconSkillNuxtDark = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      {...props}
      className={cn('icon-[skill-icons--nuxtjs-dark]', className)}
    ></span>
  );
};

export const IconSkillNuxtLight = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      {...props}
      className={cn('icon-[skill-icons--nuxtjs-light]', className)}
    ></span>
  );
};
