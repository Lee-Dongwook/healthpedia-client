import React from "react";
import Image, { type StaticImageData } from "next/image";

interface HeaderImageProps {
  src: StaticImageData | string;
  alt: string;
}

export default function HeaderImage({ src, alt }: HeaderImageProps) {
  return <Image src={src} alt={alt} />;
}
