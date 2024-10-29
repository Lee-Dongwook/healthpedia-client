import React from 'react';

interface ProgressBarProps {
  progress: number;
  variant: 'success' | 'error';
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  variant = 'success',
}) => {
  const bgColor = variant === 'success' ? 'bg-blue-500' : 'bg-red-500';

  return (
    <div className="w-80 h-4 bg-gray-200 rounded-full dark:bg-gray-700">
      <div
        className={`${bgColor} text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full`}
        style={{ width: `${progress}%` }}
      >
        {progress}%
      </div>
    </div>
  );
};

export default ProgressBar;
