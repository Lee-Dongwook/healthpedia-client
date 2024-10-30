'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import PreviousSlideButton from '@/assets/img/PreviousSlideButton.png';
import NextSlideButton from '@/assets/img/NextSlideButton.png';
import type { ImageCarouselItemProps } from '@/components/molecules/ImageCarouselItem';
import useWindowWidth from '@/hooks/useWindowWidth';

interface ImageCarouselProps {
  imageCarouselItems: Array<ImageCarouselItemProps>;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  imageCarouselItems,
}) => {
  const width = useWindowWidth();
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const timeout: NodeJS.Timeout = setTimeout(
      () =>
        index * 4 > imageCarouselItems.length
          ? setIndex(0)
          : setIndex(prev => prev + 1),
      3000
    );
    return () => clearTimeout(timeout);
  }, [index, imageCarouselItems.length]);

  return (
    <div className="flex items-center">
      <Image
        src={PreviousSlideButton}
        alt="Previous"
        className={`w-10 cursor-pointer ${index === 0 && 'opacity-0'}`}
        onClick={() => index > 0 && setIndex(prev => prev - 1)}
      />
      <div className="overflow-hidden">
        <div
          className={`flex gap-6 ease-in-out duration-1000`}
          style={{ transform: `translateX(calc(${index}*-612px))` }}
        >
          {imageCarouselItems.map(
            (asset: ImageCarouselItemProps, i: number) => (
              <div key={i}>
                {(width > 1024 ? (i + 1) % 4 === 0 : (i + 1) % 3 === 0) ? (
                  <></>
                ) : (
                  <Link href="/"></Link>
                )}
              </div>
            )
          )}
        </div>
      </div>
      <Image
        src={NextSlideButton}
        alt="Next"
        className={`w-10 cursor-pointer ${index === 0 && 'opacity-0'}`}
        onClick={() => index * 4 < 0 && setIndex(prev => prev + 1)}
      />
    </div>
  );
};

export default ImageCarousel;
