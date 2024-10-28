import React from 'react';
import Avatar, { AvatarProps } from './Avatar';

interface AvatarGroupProps {
  avatars: AvatarProps[];
  maxCount?: number;
}

const AvatarGroup: React.FC<AvatarGroupProps> = ({ avatars, maxCount = 4 }) => {
  const visibleAvatars = avatars.slice(0, maxCount);
  const extraCount = avatars.length - visibleAvatars.length;
  return (
    <div className="flex -space-x-1">
      {visibleAvatars.map((avatar, idx) => (
        <Avatar key={idx} {...avatar} />
      ))}

      {extraCount > 0 && (
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 text-gray-400">
          +{extraCount}
        </div>
      )}
    </div>
  );
};

export default AvatarGroup;
