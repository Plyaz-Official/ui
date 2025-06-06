import React from "react";
import clsx from "clsx";
import { Box } from "@/components/Box/Box";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
  children?: React.ReactNode;
}

export const Section = ({
  className = "",
  children,
  ...props
}: SectionProps) => {
  return (
    <Box
      element="section"
      className={clsx("p-4 sm:p-6 my-4 mx-2", className)}
      {...props}
    >
      {children}
    </Box>
  );
};
