import React from "react";
import clsx from "clsx";

interface ExternalLinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
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
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      data-testid="link"
      className={clsx(
        "text-blue-600 hover:underline visited:text-purple-600  active:text-blue-900 focus:outline-none  ",
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
};
