import * as React from 'react';

import { cn } from '@/lib/utils';

export default function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot='input'
      className={cn(
        `
          flex h-9 w-full min-w-0 rounded-sm border border-subtle bg-transparent
          px-3 py-1 text-base transition-[color,box-shadow]
          outline-none
          selection:bg-primary selection:text-primary-foreground
          file:inline-flex file:h-7 file:border-0 file:bg-transparent
          file:text-sm file:font-medium file:text-foreground
          text-secondary
          placeholder:text-accent-foreground
          disabled:pointer-events-none disabled:cursor-not-allowed
          disabled:opacity-50 disabled:placeholder:text-secondary-foreground
          md:text-sm
        `,
        `
          focus-visible:border-ring focus-visible:ring-[3px]
          focus-visible:ring-ring/50
        `,
        `
          aria-invalid:border-destructive aria-invalid:ring-destructive/20
        `,
        className
      )}
      {...props}
      data-testid='input'
    />
  );
}
