import React from 'react';

import { Box } from '@/components';
import {
  ALIGN_MAPPER,
  COLUMN_NUMBER,
  GAP,
  JUASTIFY_MAPPER,
  ROW_NUMBER,
} from '@/constants/constant';
import type { ElementType } from '@/types/type';
import { cn } from '@/lib/utils';

export interface GridProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  className?: string;
  cols?: keyof typeof COLUMN_NUMBER;
  rows?: keyof typeof ROW_NUMBER;
  gap?: keyof typeof GAP;
  justify?: keyof typeof JUASTIFY_MAPPER;
  align?: keyof typeof ALIGN_MAPPER;
  element?: ElementType;
}

export const Grid = ({
  children,
  className,
  cols,
  rows,
  gap,
  justify,
  align,
  element,
  ...props
}: GridProps) => {
  return (
    <Box
      element={element}
      className={cn(
        'grid',
        cols && COLUMN_NUMBER[cols],
        rows && ROW_NUMBER[rows],
        gap && GAP[gap],
        justify && JUASTIFY_MAPPER[justify],
        align && ALIGN_MAPPER[align],
        className
      )}
      {...props}
    >
      {children}
    </Box>
  );
};

export default Grid;
