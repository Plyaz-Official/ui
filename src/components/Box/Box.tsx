import React from "react";
import type { ElementType } from "@/types/type";

interface BoxProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  element?: ElementType;
  className?: string;
}

export const Box = ({
  children,
  element = "div",
  className = "",
  ...props
}: BoxProps) => {
  const Element = element;
  return (
    <Element className={className} {...props} data-testid="box">
      {children}
    </Element>
  );
};
