import clsx from "clsx";
import React from "react";

import { SIZES_MAPPER, TEXT_WEIGHT_MAPPER, VARIANT_MAPPER } from "@/constants/constant";

type TextElement =
  | "span"
  | "p"
  | "strong"
  | "em"
  | "div"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6";

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
  children: React.ReactNode;
  element: TextElement;
  weight: keyof typeof TEXT_WEIGHT_MAPPER;
  variant: keyof typeof VARIANT_MAPPER;
  size?: keyof typeof SIZES_MAPPER;
}

export const Text = ({
  className,
  children,
  element,
  weight,
  variant,
  size,
  ...props
}: TextProps) => {
  const Element = element;
  return (
    <Element
      data-testid="text"
      className={clsx(
        "font-sans text-base font-normal",
        size && SIZES_MAPPER[size],
        weight && TEXT_WEIGHT_MAPPER[weight],
        variant && VARIANT_MAPPER[variant],
        className
      )}
      {...props}
    >
      {children}
    </Element>
  );
};

export default Text;
