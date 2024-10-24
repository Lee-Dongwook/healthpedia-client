import React, { type ReactNode } from "react";

interface HeaderLayoutProps {
  children: ReactNode;
}

export default function HeaderLayout({ children }: HeaderLayoutProps) {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-around items-center px-4">
        {children}
      </div>
    </header>
  );
}
