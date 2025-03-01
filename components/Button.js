"use client";

import Link from "next/link";

export function PrimaryButton({ children, className = "", href, ...props }) {
  const buttonClasses = `btn-primary ${className}`;
  
  if (href) {
    return (
      <Link href={href} className={buttonClasses} {...props}>
        {children}
      </Link>
    );
  }
  
  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
}

export function SecondaryButton({ children, className = "", href, ...props }) {
  const buttonClasses = `btn-secondary ${className}`;
  
  if (href) {
    return (
      <Link href={href} className={buttonClasses} {...props}>
        {children}
      </Link>
    );
  }
  
  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
}

export function OutlineButton({ children, className = "", href, variant = "default", ...props }) {
  const buttonClasses = variant === "light" ? `btn-outline-light ${className}` : `btn-outline ${className}`;
  
  if (href) {
    return (
      <Link href={href} className={buttonClasses} {...props}>
        {children}
      </Link>
    );
  }
  
  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
}

export function TextButton({ children, className = "", href, ...props }) {
  const buttonClasses = `text-subtitle hover:text-accent font-semibold transition-property: color; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; display: inline-flex; align-items: center; ${className}`;
  
  if (href) {
    return (
      <Link href={href} className={buttonClasses} {...props}>
        {children}
        <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </Link>
    );
  }
  
  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
}

const ButtonComponents = { PrimaryButton, SecondaryButton, OutlineButton };
export default ButtonComponents;