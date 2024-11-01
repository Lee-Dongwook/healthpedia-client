import React from 'react';
import Image from 'next/image';

export interface AvatarProps {
  key?: number;
  imageUrl?: string;
  icon?: React.ReactNode;
  initials?: string;
  status?: 'active' | 'idle';
  width?: number;
  height?: number;
}

const Avatar: React.FC<AvatarProps> = ({
  imageUrl,
  icon,
  initials,
  status,
  width,
  height,
}) => {
  const size = 'w-14 h-14';

  const baseClasses = `${size} rounded-full overflow-hidden inline-block align-middle`;
  const statusClasses = `absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white`;
  return (
    <div className="relative">
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt="Avatar"
          className={`${baseClasses} object-cover`}
          width={width}
          height={height}
        />
      ) : icon ? (
        <div
          className={`${baseClasses} bg-[#E3EDFF] flex items-center justify-center`}
        >
          {icon}
        </div>
      ) : (
        <div
          className={`${baseClasses} bg-[#E3EDFF] flex items-center justify-center text-primary`}
        >
          {initials && (
            <>
              <span className="text-lg">{initials[0]}</span>
              <span className="text-sm mt-0.5">{initials[1]}</span>
            </>
          )}
        </div>
      )}
      {status && (
        <span
          className={`${statusClasses} ${status === 'active' ? 'bg-green-500' : 'bg-gray-400'}`}
        ></span>
      )}
    </div>
  );
};

export default Avatar;
