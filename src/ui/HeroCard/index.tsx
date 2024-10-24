import React from "react";
import Image from "next/image";
import Link from "next/link";

interface HeroCardProps {
  title: string;
  description: string;
  linkText: string;
  linkUrl: string;
}

export default function HeroCard({
  title,
  description,
  linkText,
  linkUrl,
}: HeroCardProps) {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-gray-200 h-48 flex items-center justify-center">
        <Image
          src="https://via.placeholder.com/150"
          alt="default"
          width={150}
          height={150}
        />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <p className="mt-2 text-gray-600">{description}</p>
        <Link
          href={linkUrl}
          className="mt-4 inline-block text-blue-500 hover:underline"
        >
          {linkText} →
        </Link>
      </div>
    </div>
  );
}
