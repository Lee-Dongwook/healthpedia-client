import React from 'react';

interface TimeLineEventProps {
  date: string;
  description: string;
}

const TimeLineEvent: React.FC<TimeLineEventProps> = ({ date, description }) => {
  return (
    <div className="flex items-start space-x-4 mb-4">
      <p className="text-lg font-semibold text-gray-500 w-16">{date}</p>
      <div className="w-px h-6 bg-gray-300 mx-4"></div>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default TimeLineEvent;
