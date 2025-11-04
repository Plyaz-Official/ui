import React from 'react';

import { Box } from '../../components/Box/Box';
import type { ElementType } from '../../types/type';
import { ALIGN_MAPPER, COLUMN_NUMBER, JUASTIFY_MAPPER, ROW_NUMBER } from '../../constants/constant';
import { cn } from '../../lib/utils';

const GAP = {
  '0.5': 'gap-0.5',
  '1.5': 'gap-1.5',
  '2.5': 'gap-2.5',
  '3.5': 'gap-3.5',
  '1': 'gap-1',
  '2': 'gap-2',
  '3': 'gap-3',
  '4': 'gap-4',
  '5': 'gap-5',
  '6': 'gap-6',
  '7': 'gap-7',
  '8': 'gap-8',
  '9': 'gap-9',
  '10': 'gap-10',
  '11': 'gap-11',
  '12': 'gap-12',
  '14': 'gap-14',
  '16': 'gap-16',
  '20': 'gap-20',
};

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
