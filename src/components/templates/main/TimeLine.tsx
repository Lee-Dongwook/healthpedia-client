import React from 'react';
import Button from '@/components/atoms/Button';
import TimeLineYear from '@/components/organisms/main/TimeLineYear';
import { TimeLineData } from '@/lib/TimeLineData';

const TimeLineSection: React.FC = () => {
  return (
    <div className="h-[1920px] flex flex-col justify-center items-center overflow-auto">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-5xl font-bold mb-40">주요 연혁</h1>
        <div className="flex flex-col gap-8">
          {TimeLineData.map(data => (
            <div key={data.year}>
              <TimeLineYear year={data.year} events={data.events} />
            </div>
          ))}
        </div>
        <h4 className="text-base font-bold mt-24 mb-4">
          아프지마에 대해서 궁금한가요?
        </h4>
        <Button variant="primary" size="large" className="text-center">
          문의하기
        </Button>
      </div>
    </div>
  );
};

export default TimeLineSection;
