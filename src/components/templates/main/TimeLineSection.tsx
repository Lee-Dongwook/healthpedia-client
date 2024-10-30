import React from 'react';
import TimeLineYear from '@/components/organisms/main/TimeLineYear';
import { TimeLineData } from '@/lib/TimeLineData';

const TimeLineSection: React.FC = () => {
  return (
    <div className="h-screen">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold mb-2"></h1>
        <div className="flex flex-col gap-8">
          {TimeLineData.map(data => (
            <div key={data.year}>
              <TimeLineYear year={data.year} events={data.events} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimeLineSection;
