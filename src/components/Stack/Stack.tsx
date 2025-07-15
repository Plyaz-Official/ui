import React from 'react';

import { Box } from '@/components';
import type { ElementType } from '@/types/type';
import { cn } from '@/lib/utils';

export interface StackProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  direction?: 'vertical' | 'horizontal';
  spacing?: string;
  element?: ElementType;
}
export const Stack = ({
  children,
  direction = 'horizontal',
  spacing = 'space-x-2',
  element,
  className,
  ...props
}: StackProps) => {
  const flexDirection = direction === 'vertical' ? 'flex-col' : 'flex-row';
  return (
    <Box className={cn('flex', flexDirection, spacing, className)} element={element} {...props}>
      {children}
    </Box>
  );
};

export default Stack;
