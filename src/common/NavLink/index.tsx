"use client";

import React, { type ReactNode } from "react";
import Link, { type LinkProps } from "next/link";

interface NavLinkProps extends LinkProps {
  children: ReactNode;
  className?: string;
}

export default function NavLink({
  children,
  className = "",
  ...props
}: NavLinkProps) {
  const baseClasses = "text-gray-600 hover:text-blue-600";

  return (
    <Link {...props} className={className ? className : baseClasses}>
      {children}
    </Link>
  );
}
