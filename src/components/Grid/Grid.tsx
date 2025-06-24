import React from "react";

import { Box } from "@/components/Box/Box";
import type { ElementType } from "@/types/type";
import { cn } from "@/utils/cn";

export const JUASTIFY_MAPPER = {
  start: "justify-start",
  end: "justify-end",
  center: "justify-center",
  between: "justify-between",
  around: "justify-around",
  evenly: "justify-evenly",
  stretch: "justify-stretch",
};

export const ALIGN_MAPPER = {
  start: "items-start",
  end: "items-end",
  center: "items-center",
  baseline: "items-baseline",
  stretch: "items-stretch",
};

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
      className={cn(
        "grid",
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
