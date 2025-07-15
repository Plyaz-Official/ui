import React from 'react';

import { cn } from '@/lib/utils';

export interface ExternalLinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  className?: string;
  href: string;
}
export const ExternalLink = ({ children, className, href, ...props }: ExternalLinkProps) => {
  return (
    <a
      data-testid='link'
      href={href}
      rel='noopener noreferrer'
      target='_blank'
      className={cn(
        `focus:outline-none text-blue-600 active:text-blue-900 visited:text-purple-600 hover:underline`,
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
};

export default ExternalLink;
