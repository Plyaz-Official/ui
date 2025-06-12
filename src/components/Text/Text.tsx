import React from "react";
import clsx from "clsx";

const VARIANT_MAPPER = {
  body: "font-sans",
  heading: "font-sans",
  caption: "font-sans",
};

const SIZES_MAPPER = {
   xs : "text-xs",
    sm : "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
    "4xl": "text-4xl",
    "5xl": "text-5xl",
    "6xl": "text-6xl",
    '7xl': "text-7xl",
    '8xl': "text-8xl",
    '9xl': "text-9xl",

};

export const TEXT_WEIGHT_MAPPER = {
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
  light : 'font-light'
} as const ;

type TextElement = "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface TextProps extends React.HTMLAttributes<HTMLElement> {
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
     
      className={clsx(
        "font-normal text-base font-sans",
        size && SIZES_MAPPER[size],
        weight && TEXT_WEIGHT_MAPPER[weight],
        variant && VARIANT_MAPPER[variant],
        
        className
      )}
       data-testid = 'text'
      {...props}
    >
      {children}
    </Element>
  );
};

