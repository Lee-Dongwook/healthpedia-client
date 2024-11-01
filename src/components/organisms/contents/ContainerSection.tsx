import React from 'react';

const ContainerSection = () => {
  return (
    <>
      <div className="flex justify-center items-center h-1 w-20 bg-blue-500 mb-6"></div>
      <h1 className="text-4xl font-bold mb-2">병원마다 비급여 진료비가</h1>
      <h1 className="text-4xl font-bold mb-8">다르다는 사실, 알고 계셨나요?</h1>
      <p className="text-base mb-2">
        건강을 지키기 위해 합리적인 선택이 필요할 때,
      </p>
      <p className="text-base">
        치료 전 가격을 비교하고, 가장 적합한 병원을 찾아드립니다.
      </p>
    </>
  );
};

export default ContainerSection;
