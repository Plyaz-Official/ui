import React from "react";
import { Box } from "@/components/Box/Box";
import type { ElementType } from "@/types/type";
import { cn } from "@/utils/cn";

export interface ContainerProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
  children: React.ReactNode;
  element?: ElementType;
}

export const Container = ({
  className = "",
  children,
  element,
  ...props
}: ContainerProps) => {
  return (
    <Box
      element={element}
      className={cn("mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl", className)}
      {...props}
    >
      {children}
    </Box>
  );
};

export default Container;
