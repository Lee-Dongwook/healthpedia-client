import React from 'react';
import Image from 'next/image';
import { MainImageCarouselContentList } from '@/lib/MainImageCarouselContent';

export interface ImageCarouselItemProps {
  mainTitle: string;
  subTitle: string;
  contentTitle: string;
  contentNumber: number;
  src: string;
}

export interface ImageCarouselItemContentProps {
  contentNumber: number;
}

const ImageCarouselItemContent: React.FC<ImageCarouselItemContentProps> = ({
  contentNumber,
}) => {
  let content;
  switch (contentNumber) {
    case 1:
      content = MainImageCarouselContentList.firstContent;
      break;
    case 2:
      content = MainImageCarouselContentList.secondContent;
      break;
    case 3:
      content = MainImageCarouselContentList.thirdContent;
      break;
    default:
      content = null;
  }

  return (
    <div>
      {content && (
        <>
          <div className="text-center">
            {content.firstLine.map(
              (item: { text: string; color: string }, index: number) => (
                <span key={index} className={item.color}>
                  {item.text}
                  {index < content.firstLine.length - 1 ? ' ' : ''}
                </span>
              )
            )}
          </div>
          <div className="text-center">
            {content.secondLine.map(
              (item: { text: string; color: string }, index: number) => (
                <span key={index} className={item.color}>
                  {item.text}
                  {index < content.secondLine.length - 1 ? ' ' : ''}
                </span>
              )
            )}
          </div>
          <div className="text-center">
            {content.thirdLine.map(
              (item: { text: string; color: string }, index: number) => (
                <span key={index} className={item.color}>
                  {item.text}
                  {index < content.thirdLine.length - 1 ? ' ' : ''}
                </span>
              )
            )}
          </div>
        </>
      )}
      {!content && <p className="text-center">No content available</p>}
    </div>
  );
};

const ImageCarouselItem: React.FC<ImageCarouselItemProps> = ({
  mainTitle,
  subTitle,
  contentTitle,
  contentNumber,
  src,
}) => {
  return (
    <div className="bg-[#F6F6F6] p-4 w-full h-screen flex flex-col justify-start items-center shadow rounded-lg">
      <h5 className="text-[#007FFF] text-sm">핵심가치</h5>
      <h2 className="mt-4 text-3xl font-bold">{mainTitle}</h2>
      <h2 className="text-3xl font-bold">{subTitle}</h2>
      {/* <hr className="my-2 bg-blue-500" /> */}
      <p className="mt-10 mb-4 text-base text-gray-800 font-bold">
        {contentTitle}
      </p>
      {contentNumber === 1 ? (
        <ImageCarouselItemContent contentNumber={1} />
      ) : contentNumber === 2 ? (
        <ImageCarouselItemContent contentNumber={2} />
      ) : contentNumber === 3 ? (
        <ImageCarouselItemContent contentNumber={3} />
      ) : null}
      <div className="w-full h-auto relative">
        <Image
          src={src}
          alt={`ImageCarousel ${subTitle}`}
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  );
};
export default ImageCarouselItem;
