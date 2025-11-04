import React from 'react';

import { Box } from '../../components/Box/Box';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
  children?: React.ReactNode;
}

export const Section = ({ className = '', children, ...props }: SectionProps) => {
  return (
    <Box element='section' className={className} {...props}>
      {children}
    </Box>
  );
};

export default Section;
