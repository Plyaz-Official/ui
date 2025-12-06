/* eslint-disable better-tailwindcss/no-unregistered-classes */

'use client';
import { useTheme } from 'next-themes';
import { Toaster as Sonner, type ToasterProps } from 'sonner';
import {
  CircleCheckIcon,
  InfoIcon,
  TriangleAlertIcon,
  OctagonXIcon,
  Loader2Icon,
} from 'lucide-react';

const Toaster = ({ toastOptions, ...props }: ToasterProps) => {
  const { theme = 'system' } = useTheme();
  const defaultClassNames = {
    toast:
      'group toast group-[.toaster]:bg-background group-[.toaster]:border-border group-[.toaster]:shadow-lg',
    description: 'group-[.toast]:!text-tertiary-foreground',
    actionButton:
      '!h-7 group-[.toast]:text-background group-[.toast:not([data-type=error]):not([data-type=success]):not([data-type=warning]):not([data-type=info]):not([data-type=loading])]:!bg-orange-gradient group-data-[type=error]:!bg-destructive group-data-[type=success]:!bg-emerald-600 group-data-[type=warning]:!bg-amber-600 group-data-[type=info]:!bg-blue-600',
    cancelButton:
      '!h-7 group-[.toast]:text-background group-[.toast:not([data-type=error]):not([data-type=success]):not([data-type=warning]):not([data-type=info]):not([data-type=loading])]:!bg-orange-gradient group-data-[type=error]:!bg-destructive group-data-[type=success]:!bg-emerald-600 group-data-[type=warning]:!bg-amber-600 group-data-[type=info]:!bg-blue-600',
    error: '!bg-red-50 !text-destructive !border-red-200',
    success: '!bg-emerald-50 !text-emerald-600 !border-emerald-200',
    warning: '!bg-amber-50 !text-amber-600 !border-amber-200',
    info: '!bg-blue-50 !text-blue-600 !border-blue-200',
    icon: '!w-6 !h-6 group-data-[type=error]:!text-destructive group-data-[type=success]:!text-emerald-600 group-data-[type=warning]:!text-amber-600 group-data-[type=info]:!text-blue-600',
  };

  return (
    <Sonner
      theme={theme as ToasterProps['theme']}
      className='toaster group'
      icons={{
        success: <CircleCheckIcon className='size-6' />,
        info: <InfoIcon className='size-6' />,
        warning: <TriangleAlertIcon className='size-6' />,
        error: <OctagonXIcon className='size-6' />,
        loading: <Loader2Icon className='size-6 animate-spin' />,
      }}
      style={
        {
          '--normal-bg': 'var(--popover)',
          '--normal-text': 'var(--secondary)',
          '--normal-border': 'var(--border-subtle)',
          '--border-radius': 'var(--radius-sm)',
        } as React.CSSProperties
      }
      toastOptions={{
        ...toastOptions,
        classNames: {
          ...defaultClassNames,
          ...toastOptions?.classNames,
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
