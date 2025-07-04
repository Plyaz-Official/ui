import clsx from "clsx";
import React from "react";

import { Box } from "@/components";
import type { ElementType } from "@/types/type";

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
      className={clsx(
        `
          mx-auto max-w-7xl px-4
          sm:px-6
          lg:px-8
        `,
        className
      )}
      {...props}
    >
      {children}
    </Box>
  );
};

export default Container;
