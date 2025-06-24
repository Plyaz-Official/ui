import React from "react";
import { Box } from "@/components/Box/Box";
import { cn } from "@/utils/cn";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
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
      className={cn("p-4 sm:p-6 my-4 mx-2", className)}
      {...props}
    >
      {children}
    </Box>
  );
};

export default Section;
