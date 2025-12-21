/* eslint-disable react-refresh/only-export-components */
import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { type VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';

export const badgeVariants = cva(
  'inline-flex items-center justify-center rounded-full border px-2 py-1 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden hover:opacity-80',
  {
    variants: {
      variant: {
        default: 'bg-orange-gradient text-white',
        secondary: 'border-transparent bg-primary text-secondary',
        destructive: 'bg-destructive text-white',
        outline: 'border-subtle text-secondary',
        success: 'opacity-80 hover:opacity-60 bg-emerald-600 text-white',
        info: 'opacity-80 hover:opacity-60 bg-blue-600 text-white',
        warning: 'opacity-80 hover:opacity-60 bg-amber-600 text-white',
        error: 'opacity-80 hover:opacity-60 bg-destructive text-white',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<'span'> & VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : 'span';

  return (
    <Comp data-slot='badge' className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge };
