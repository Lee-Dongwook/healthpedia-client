'use client';

import React, { useState } from 'react';
import Image, { type StaticImageData } from 'next/image';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { useMutation } from '@tanstack/react-query';

interface HoverCardProps {
  imageUrl: string | StaticImageData;
  date: string;
  title: string;
  description: string;
  viewCount: number;
  likeCount: number;
}

const toggleLikeApiMock = (newLikeStatus: boolean) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ success: true, newLikeStatus });
    }, 500);
  });
};

const HoverCard = ({
  imageUrl,
  date,
  title,
  description,
  viewCount,
  likeCount,
}: HoverCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLikeClicked, setIsLikeClicked] = useState(false);
  const [optimisticLikeCount, setOptimisticLikeCount] = useState(
    likeCount || 0
  );

  const { mutate } = useMutation({
    mutationFn: toggleLikeApiMock,
    onMutate: async newLikeStatus => {
      await Promise.resolve();
      setIsLikeClicked(newLikeStatus);
      setOptimisticLikeCount(prev => prev + (newLikeStatus ? 1 : -1));
      return {
        previousLikeStatus: isLikeClicked,
        previousLikeCount: optimisticLikeCount,
      };
    },
    onError: (error, newLikeStatus, context) => {
      setIsLikeClicked(context!.previousLikeStatus);
      setOptimisticLikeCount(context!.previousLikeCount);
    },
  });

  const handleLikeClick = () => {
    const newLikeStatus = !isLikeClicked;
    mutate(newLikeStatus);
  };

  return (
    <div
      className="relative w-[300px] h-[300px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={imageUrl}
        alt={title}
        width={300}
        height={300}
        layout="responsive"
      />
      {isHovered && (
        <div className="absolute inset-0 bg-transparent bg-opacity-50 flex flex-col text-white p-4">
          <span className="absolute mt-2 text-sm">{date}</span>
          <span className="absolute mt-2 ml-20 text-sm">
            조회수: {viewCount}
          </span>
          <div className="flex flex-col justify-center items-center text-center">
            <h5 className="mt-24 text-lg font-bold mb-2">{title}</h5>
            <p className="text-sm mb-2">{description}</p>
          </div>

          <div className="mt-16 flex space-x-4">
            {isLikeClicked ? (
              <FaHeart className="cursor-pointer" onClick={handleLikeClick} />
            ) : (
              <FaRegHeart
                className="cursor-pointer"
                onClick={handleLikeClick}
              />
            )}
            <p className="text-sm">{likeCount}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default HoverCard;
