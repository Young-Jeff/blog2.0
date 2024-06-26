import React from 'react';

import { cn } from '@/lib/utils';

export const IconSkillGit = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      {...props}
      className={cn('icon-[skill-icons--git]', className)}
    ></span>
  );
};
