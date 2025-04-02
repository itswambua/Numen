"use client";

import Link from "next/link";
import { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";

type ButtonOrLinkProps =
  | ({ href?: undefined } & ButtonHTMLAttributes<HTMLButtonElement>)
  | ({ href: string } & AnchorHTMLAttributes<HTMLAnchorElement>);

type CommonProps = {
  children: ReactNode;
  className?: string;
};

type Props = ButtonOrLinkProps & CommonProps;
type OutlineProps = Props & { variant?: "default" | "light" };

export function PrimaryButton({ children, className = "", href, ...props }: Props) {
  const buttonClasses = `btn-primary ${className}`;

  if (href) {
    return (
      <Link href={href} className={buttonClasses} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </Link>
    );
  }

  return (
    <button className={buttonClasses} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}

export function SecondaryButton({ children, className = "", href, ...props }: Props) {
  const buttonClasses = `btn-secondary ${className}`;

  if (href) {
    return (
      <Link href={href} className={buttonClasses} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </Link>
    );
  }

  return (
    <button className={buttonClasses} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}

export function OutlineButton({ children, className = "", href, variant = "default", ...props }: OutlineProps) {
  const buttonClasses =
    variant === "light" ? `btn-outline-light ${className}` : `btn-outline ${className}`;

  if (href) {
    return (
      <Link href={href} className={buttonClasses} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </Link>
    );
  }

  return (
    <button className={buttonClasses} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}

export function TextButton({ children, className = "", href, ...props }: Props) {
  const buttonClasses = `text-subtitle hover:text-accent font-semibold transition-all inline-flex items-center ${className}`;

  if (href) {
    return (
      <Link href={href} className={buttonClasses} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
        <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    );
  }

  return (
    <button className={buttonClasses} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}

const ButtonComponents = { PrimaryButton, SecondaryButton, OutlineButton };
export default ButtonComponents;
