import React from "react";

interface HeroButtonProps {
  label: string;
  onClick?: () => void;
}

export default function HeroButton({ label, onClick }: HeroButtonProps) {
  return (
    <button
      className="bg-black w-36 h-16 text-white px-4 py-2 rounded"
      onClick={onClick}
    >
      {label}
    </button>
  );
}
