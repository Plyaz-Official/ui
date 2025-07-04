import React from "react";

import type { ElementType } from "@/types/type";

export interface BoxProps extends React.HTMLAttributes<HTMLElement> {
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
  const ELEMENT = element;
  return (
    <ELEMENT className={className} {...props} data-testid="box">
      {children}
    </ELEMENT>
  );
};

export default Box;
