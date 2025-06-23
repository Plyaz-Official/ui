import React from 'react';

import { Text } from '@/components/Text/Text';

const SIZE_MAP = {
  xs: 'xs',
  sm: 'sm',
  base: 'base',
  lg: 'lg',
  xl: 'xl',
  '2xl': '2xl',
  '3xl': '3xl',
  '4xl': '4xl',
} as const;

export type HeadingType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  className?: string;
  element: HeadingType;
  size: keyof typeof SIZE_MAP;
}

export const Heading = ({ children, element, className, size, ...props }: HeadingProps) => {
  return (
    <Text
      className={className}
      element={element}
      size={SIZE_MAP[size]}
      variant='heading'
      weight='medium'
      {...props}
    >
      {children}
    </Text>
  );
};

export default Heading;
