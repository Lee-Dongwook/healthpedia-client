import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import Image, { type StaticImageData } from 'next/image';
import Link from 'next/link';

interface InfoCardProps {
  imageUrl: string | StaticImageData;
  title: string;
  description: string;
  linkHref: string;
}

const InfoCard: React.FC<InfoCardProps> = ({
  imageUrl = '',
  title,
  description,
  linkHref = '',
}) => {
  return (
    <div className="bg-white shadow rounded-lg p-4 flex flex-col w-[248px]">
      <Image src={imageUrl} alt={title} width={248} height={100} />
      <h3 className="text-lg font-semibold mt-4">{title}</h3>
      <p className="text-gray-600 mb-4 text-wrap">{description}</p>
      <Link
        href={linkHref}
        className="text-blue-500 hover:text-blue-700 transition duration-150 ease-in-out"
      >
        <span className="inline-flex">
          More Info <HiArrowNarrowRight className="mt-1 ml-0.5" />
        </span>
      </Link>
    </div>
  );
};

export default InfoCard;
