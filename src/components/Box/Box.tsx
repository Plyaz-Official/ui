import React from 'react';

import type { ElementType } from '@/types/type';

export type BoxProps<T extends ElementType = 'div'> = {
  children?: React.ReactNode;
  element?: ElementType;
  className?: string;
} & React.ComponentProps<T>;

export const Box = ({ children, element = 'div', className = '', ...props }: BoxProps) => {
  const ELEMENT = element;
  return (
    <ELEMENT className={className} {...props} data-testid='box'>
      {children}
    </ELEMENT>
  );
};

export default Box;
