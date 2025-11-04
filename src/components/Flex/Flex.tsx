import React from 'react';

import { Box } from '../../components/Box/Box';
import { ALIGN_MAPPER, JUASTIFY_MAPPER } from '../../constants/constant';
import type { ElementType } from '../../types/type';
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
  gap?: keyof typeof GAP;
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
      className={cn(
        'flex',
        direction && DIRECTION_MAPPER[direction],
        justify && JUASTIFY_MAPPER[justify],
        align && ALIGN_MAPPER[align],
        wrap && WRAP_MAPPER[wrap],
        gap && GAP[gap],
        className
      )}
      {...props}
    >
      {children}
    </Box>
  );
};

export default Flex;
