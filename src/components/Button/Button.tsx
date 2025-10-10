/* eslint-disable react-refresh/only-export-components */ 
/* eslint-disable better-tailwindcss/no-unregistered-classes */
import { Slot } from '@radix-ui/react-slot';
import { type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';

export const buttonVariants = cva(
  `inline-flex justify-center items-center gap-2 aria-invalid:border-destructive focus-visible:border-ring rounded-full outline-none aria-invalid:ring-destructive/20 focus-visible:ring-[3px] focus-visible:ring-ring/50 dark:aria-invalid:ring-destructive/40 [&_svg:not([class*='size-'])]:size-4 font-medium text-sm whitespace-nowrap [&_svg]:pointer-events-none disabled:pointer-events-none shrink-0 [&_svg]:shrink-0`,
  {
    variants: {
      variant: {
        default: `
          bg-primary-foreground text-background
          hover:bg-orange-gradient hover:opacity-90
          disabled:bg-secondary disabled:opacity-50
          `,
        outline: `
          text-secondary shadow-xs
          border border-muted-foreground bg-background
          hover:bg-primary
          disabled:opacity-50
        `,
        secondary: `
          text-secondary
          hover:text-primary hover:bg-orange-gradient hover:opacity-70
          disabled:text-secondary disabled:opacity-50
        `,
        destructive: `
          bg-destructive text-white
          hover:opacity-70
          focus-visible:ring-destructive/20
          disabled:bg-destructive disabled:opacity-40
        `,
        ghost: `
          text-secondary
          hover:shadow-sm
          disabled:opacity-50
        `,
        link: `
          text-tertiary-foreground underline-offset-4
          disabled:opacity-50
          `,
      },
      size: {
        default: `
          h-9 px-4 py-2
          has-[>svg]:px-3
        `,
        sm: `
          h-7 gap-1.5 px-3
          has-[>svg]:px-2.5
        `,
        lg: `
          h-10 px-6
          has-[>svg]:px-4
        `,
        'x-lg': `
          h-14 px-6
          text-base
          has-[>svg]:px-4
        `,
        icon: 'size-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export default function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot='button'
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
      data-testid='button'
    />
  );
}
