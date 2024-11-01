import React from 'react';
import Image, { type StaticImageData } from 'next/image';

interface ImageInfo {
  src: string | StaticImageData;
  alt: string;
}

interface Description {
  title: string;
  subtitle?: string;
  content: string;
}

interface ImageTextPairProps {
  images: ImageInfo[];
  description: Description;
}

const ImageTextPairSection = ({ images, description }: ImageTextPairProps) => {
  return (
    <div
      className={`flex ${images.length > 1 ? 'flex-row -space-x-20' : 'flex-col'} justify-center items-center text-center`}
    >
      {images.map((image, index) => (
        <div key={index} className={`w-full ${index !== 0 ? '' : ''}`}>
          <Image
            src={image.src}
            alt={image.alt}
            width={400}
            height={400}
            objectFit="cover"
          />
          {index === images.length - 1 && (
            <div className="p-5">
              <h2 className="text-xl font-bold mb-2">{description.title}</h2>
              {description.subtitle && (
                <h3 className="text-lg font-semibold mb-2">
                  {description.subtitle}
                </h3>
              )}
              <p>{description.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ImageTextPairSection;
