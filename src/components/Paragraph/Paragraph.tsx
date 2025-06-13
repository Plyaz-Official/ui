import React from "react";
import { Text } from "@/components/Text/Text";

const SIZE_MAP = {
  xs: "xs",
  sm: "sm",
  base: "base",
  lg: "lg",
} as const;

interface ParagraphProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  size: keyof typeof SIZE_MAP;
}
export const Paragraph = ({
  children,
  className,
  size,
  ...props
}: ParagraphProps) => {
  return (
    <Text
      element={"p"}
      weight="normal"
      variant="body"
      className={className}
      size={SIZE_MAP[size]}
      {...props}
    >
      {children}
    </Text>
  );
};

export default Paragraph;
