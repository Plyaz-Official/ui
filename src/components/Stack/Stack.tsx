import clsx from "clsx";
import React from "react";

import { Box } from "@/components";
import type { ElementType } from "@/types/type";

export interface StackProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  direction?: "vertical" | "horizontal";
  spacing?: string;
  element?: ElementType;
}
export const Stack = ({
  children,
  direction = "horizontal",
  spacing = "space-x-2",
  element,
  className,
  ...props
}: StackProps) => {
  const flexDirection = direction === "vertical" ? "flex-col" : "flex-row";
  return (
    <Box
      className={clsx("flex", flexDirection, spacing, className)}
      element={element}
      {...props}
    >
      {children}
    </Box>
  );
};

export default Stack;
