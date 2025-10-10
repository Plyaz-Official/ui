import { cva } from 'class-variance-authority';

export const JUASTIFY_MAPPER = {
  start: 'justify-start',
  end: 'justify-end',
  center: 'justify-center',
  between: 'justify-between',
  around: 'justify-around',
  evenly: 'justify-evenly',
  stretch: 'justify-stretch',
};

export const ALIGN_MAPPER = {
  start: 'items-start',
  end: 'items-end',
  center: 'items-center',
  baseline: 'items-baseline',
  stretch: 'items-stretch',
};
export const VARIANT_MAPPER = {
  body: 'font-general',
  heading: 'font-general',
  caption: 'font-general',
};

export const SIZES_MAPPER = {
  xs: 'text-xs',
  sm: 'text-sm',
  base: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
  '2xl': 'text-2xl',
  '3xl': 'text-3xl',
  '4xl': 'text-4xl',
  '5xl': 'text-5xl',
  '6xl': 'text-6xl',
  '7xl': 'text-7xl',
  '8xl': 'text-8xl',
  '9xl': 'text-9xl',
};

export const TEXT_WEIGHT_MAPPER = {
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
  light: 'font-light',
} as const;

export const COLUMN_NUMBER = {
  '1': 'grid-cols-1',
  '2': 'grid-cols-2',
  '3': 'grid-cols-3',
  '4': 'grid-cols-4',
  '5': 'grid-cols-5',
  '6': 'grid-cols-6',
  '7': 'grid-cols-7',
  '8': 'grid-cols-8',
  '9': 'grid-cols-9',
};

export const ROW_NUMBER = {
  '1': 'grid-rows-1',
  '2': 'grid-rows-2',
  '3': 'grid-rows-3',
  '4': 'grid-rows-4',
  '5': 'grid-rows-5',
  '6': 'grid-rows-6',
  '7': 'grid-rows-7',
  '8': 'grid-rows-8',
  '9': 'grid-rows-9',
};

export const GAP = {
  '1': 'gap-1',
  '2': 'gap-2',
  '3': 'gap-3',
  '4': 'gap-4',
  '5': 'gap-5',
  '6': 'gap-6',
  '7': 'gap-7',
  '8': 'gap-8',
  '9': 'gap-9',
};

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
export const badgeVariants = cva(
  'inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90',
        secondary:
          'border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90',
        destructive:
          'border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
        outline: 'text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

// Toaster component classes
export const TOASTER_CLASSES = {
  toaster: 'toaster',
} as const;
