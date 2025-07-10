import React from 'react';

import { Text } from '@/components';

const SIZE_MAP = {
  xs: 'xs',
  sm: 'sm',
  base: 'base',
  lg: 'lg',
} as const;

export interface ParagraphProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  size: keyof typeof SIZE_MAP;
}
export const Paragraph = ({ children, className, size, ...props }: ParagraphProps) => {
  return (
    <Text
      className={className}
      element={'p'}
      size={SIZE_MAP[size]}
      variant='body'
      weight='normal'
      {...props}
    >
      {children}
    </Text>
  );
};

export default Paragraph;
