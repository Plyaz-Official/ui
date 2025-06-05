import React from "react";
import { Text } from "@/components/ui/Text/Text";

const SIZE_MAP = {
  xs: "xs",
  sm: "sm",
  base: "base",
  lg: "lg",
  xl: "xl",
  "2xl": "2xl",
  "3xl": "3xl",
  "4xl": "4xl",
} as const;

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  className?: string;
  element: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size: keyof typeof SIZE_MAP;
}
export const Heading = ({
  children,
  element,
  className,
  size,
  ...props
}: HeadingProps) => {
  return (
    <Text
      element={element}
      weight="medium"
      variant="heading"
      className={className}
      size={SIZE_MAP[size]}
       {...props}
    >
      {children}
    </Text>
  );
};
