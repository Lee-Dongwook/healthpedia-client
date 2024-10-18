import React, { type ReactNode } from "react";

interface HeaderLayoutProps {
  children: ReactNode;
}

export default function HeaderLayout({ children }: HeaderLayoutProps) {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        {children}
      </div>
    </header>
  );
}
