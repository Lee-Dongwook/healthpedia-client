import React from 'react';
import TimeLineEvent from '@/components/molecules/main/TimeLineEvent';

interface TimeLineYearProps {
  year: string;
  events: Array<{ date: string; description: string }>;
}

const TimeLineYear: React.FC<TimeLineYearProps> = ({ year, events = [] }) => {
  return (
    <div className="relative mb-12">
      <div className="flex items-center mb-4">
        <h2 className="text-8xl font-bold text-blue-100">{year}</h2>
        <div className="h-px flex-1 br-gray-300 ml-6"></div>
      </div>
      <div className="ml-64 -mt-24">
        {events.map(({ date, description }, index) => (
          <TimeLineEvent key={index} date={date} description={description} />
        ))}
      </div>
    </div>
  );
};
export default TimeLineYear;
