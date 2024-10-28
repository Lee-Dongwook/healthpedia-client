import React from 'react';

interface ProgressBarProps {
  progress: number;
  variant: 'success' | 'error';
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  variant = 'success',
}) => {
  const bgColor = variant === 'success' ? 'bg-green-500' : 'bg-red-500';

  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div
        className={`${bgColor} h-2.5 rounded-full`}
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ProgressBar;
