import React from "react";
import { Box } from "@/components/Box/Box";
import type { ElementType } from "@/types/type";
import { cn } from "@/utils/cn";

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
    <Box
      element={element}
      className={cn("flex", flexDirection, spacing, className)}
      {...props}
    >
      {children}
    </Box>
  );
};

export default Stack;
