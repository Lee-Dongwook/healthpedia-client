"use client";

import React, { type ReactNode } from "react";
import Link, { type LinkProps } from "next/link";
import { cn } from "@/lib/utils";

interface NavLinkProps extends LinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export default function NavLink({ href, children, className }: NavLinkProps) {
  return (
    <Link href={href} legacyBehavior>
      <a className={cn("text-gray-600 hover:text-blue-500", className)}>
        {children}
      </a>
    </Link>
  );
}
