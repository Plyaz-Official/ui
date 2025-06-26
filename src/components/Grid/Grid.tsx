import clsx from 'clsx';
import React from 'react';

import { Box } from '@/components';
import { ALIGN_MAPPER, JUASTIFY_MAPPER } from '@/constants/constant';
import type { ElementType } from '@/types/type';

export interface GridProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  className?: string;
  cols?: string;
  rows?: string;
  gap?: string;
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
      className={clsx(
        'grid',
        cols,
        rows,
        gap,
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
