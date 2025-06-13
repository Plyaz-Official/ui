import React from "react";
import clsx from "clsx";
import { Box } from "@/components/Box/Box";
import type { ElementType } from "@/types/type";

interface ContainerProps extends React.HTMLAttributes<HTMLElement> {
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
      className={clsx("mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl", className)}
      {...props}
    >
      {children}
    </Box>
  );
};
