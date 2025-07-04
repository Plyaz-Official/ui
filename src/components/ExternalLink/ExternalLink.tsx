import clsx from "clsx";
import React from "react";

export interface ExternalLinkProps
  extends React.HTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  className?: string;
  href: string;
}
export const ExternalLink = ({
  children,
  className,
  href,
  ...props
}: ExternalLinkProps) => {
  return (
    <a
      data-testid="link"
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      className={clsx(
        `
          text-blue-600
          visited:text-purple-600
          hover:underline
          focus:outline-none
          active:text-blue-900
        `,
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
};

export default ExternalLink;
