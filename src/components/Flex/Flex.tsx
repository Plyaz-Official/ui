import clsx from 'clsx';
import React from 'react';

import { Box } from '@/components';
import { ALIGN_MAPPER, JUASTIFY_MAPPER } from '@/constants/constant';
import type { ElementType } from '@/types/type';

const DIRECTION_MAPPER = {
  row: 'flex-row',
  col: 'flex-col',
  row_reverse: 'flex-row-reverse',
  col_reverse: 'flex-col-reverse',
};
const WRAP_MAPPER = {
  wrap: 'flex-wrap',
  nowrap: 'flex-nowrap',
  wrap_reverse: 'flex-wrap-reverse',
};

export interface FlexProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  gap?: string;
  direction?: keyof typeof DIRECTION_MAPPER;
  justify?: keyof typeof JUASTIFY_MAPPER;
  align?: keyof typeof ALIGN_MAPPER;
  wrap?: keyof typeof WRAP_MAPPER;
  className?: string;
  element?: ElementType;
}
export const Flex = ({
  children,
  gap,
  direction,
  justify,
  align,
  wrap,
  className = '',
  element,
  ...props
}: FlexProps) => {
  return (
    <Box
      element={element}
      className={clsx(
        'flex',
        direction && DIRECTION_MAPPER[direction],
        justify && JUASTIFY_MAPPER[justify],
        align && ALIGN_MAPPER[align],
        wrap && WRAP_MAPPER[wrap],
        gap,
        className
      )}
      {...props}
    >
      {children}
    </Box>
  );
};

export default Flex;
