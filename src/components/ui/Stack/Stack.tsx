import React from "react";
import clsx from "clsx";
import { Box, } from "@/components/ui/Box/Box";
import type { ElementType } from "@/types/type";

interface StackProps extends React.HTMLAttributes<HTMLElement> {
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
}: StackProps) => {
  const flexDirection = direction === "vertical" ? "flex-col" : "flex-row";
  return (
    <Box
      element={element}
      className={clsx("flex", flexDirection, spacing, className)}
    >
      {children}
    </Box>
  );
};
