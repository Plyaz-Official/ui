import React from 'react';

import { Box } from '@/components';
import { cn } from '@/lib/utils';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
  children?: React.ReactNode;
}

export const Section = ({ className = '', children, ...props }: SectionProps) => {
  return (
    <Box element='section' className={cn(`mx-2 my-4 p-4 sm:p-6`, className)} {...props}>
      {children}
    </Box>
  );
};

export default Section;
