import React from 'react';

import { SIZES_MAPPER, TEXT_WEIGHT_MAPPER, VARIANT_MAPPER } from '@/constants/constant';
import { cn } from '@/lib/utils';

type TextElement = 'span' | 'p' | 'strong' | 'em' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type TextProps<T extends TextElement = 'p'> = {
  className?: string;
  children: React.ReactNode;
  element: TextElement;
  weight: keyof typeof TEXT_WEIGHT_MAPPER;
  variant: keyof typeof VARIANT_MAPPER;
  size?: keyof typeof SIZES_MAPPER;
} & React.ComponentProps<T>;
export const Text = ({
  className,
  children,
  element,
  weight,
  variant,
  size,
  ...props
}: TextProps) => {
  const ELEMENT = element;
  return (
    <ELEMENT
      data-testid='text'
      className={cn(
        'font-normal text-base',
        size && SIZES_MAPPER[size],
        weight && TEXT_WEIGHT_MAPPER[weight],
        variant && VARIANT_MAPPER[variant],
        className
      )}
      {...props}
    >
      {children}
    </ELEMENT>
  );
};

export default Text;
