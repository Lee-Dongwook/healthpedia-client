'use client';
import React from 'react';
import Image, { type StaticImageData } from 'next/image';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface TextLine {
  text: string;
  color: string;
}

interface ContentLine {
  firstLine: TextLine[];
  secondLine: TextLine[];
  thirdLine: TextLine[];
}

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  descriptionTitle: string;
  description: ContentLine;
  image: string | StaticImageData;
}

interface ImageSwiperProps {
  data: Slide[];
}

const ImageSwiper: React.FC<ImageSwiperProps> = ({ data }) => {
  return (
    <>
      <Swiper
        className="h-screen"
        navigation
        autoplay={{
          delay: 5000,
        }}
        loop={true}
        modules={[Autoplay, Navigation, Pagination]}
      >
        {data.map(
          ({ id, title, subtitle, descriptionTitle, description, image }) => (
            <SwiperSlide key={id}>
              {/* Overlay */}
              <div className="absolute inset-0 bg-[#F6F6F6]"></div>
              {/* Content */}
              <div className="relative z-10 h-full flex flex-col items-center justify-center text-center mt-16">
                <h3 className="text-blue-500 text-lg font-semibold mb-2 ml-10">
                  핵심가치
                </h3>
                <h1 className="text-3xl font-bold mb-2 ml-10">{title}</h1>
                <h1 className="text-3xl font-bold mb-10 ml-10">{subtitle}</h1>
                <h1 className="text-xl font-bold mb-4 ml-10">
                  {descriptionTitle}
                </h1>
                <div className="max-w-xl ml-10 text-center mb-6 space-y-2">
                  {(Object.keys(description) as Array<keyof ContentLine>).map(
                    lineKey => (
                      <p key={lineKey}>
                        {description[lineKey].map(({ text, color }, index) => (
                          <span key={index} className={color}>
                            {text}
                          </span>
                        ))}
                      </p>
                    )
                  )}
                </div>
                <Image
                  src={image}
                  alt="image"
                  className="w-2/5 mr-10 -mt-20"
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </SwiperSlide>
          )
        )}
      </Swiper>
    </>
  );
};

export default ImageSwiper;
