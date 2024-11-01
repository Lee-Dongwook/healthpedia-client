'use client';

import React from 'react';
import Image from 'next/image';
import MedicalRecord from '@/assets/img/Medical Record.png';
import Hospital from '@/assets/img/Hospital.png';
import Stethoscope from '@/assets/img/Stethoscope.png';
import BackgroundCardImage from '@/assets/img/BackgroundCard.png';
import BackgroundCard from '@/components/molecules/content/BackgroundCard';

export default function Background() {
  return (
    <div className="bg-gray-100 flex flex-col justify-center items-center w-[100vw]">
      <h1 className="text-4xl font-bold mt-20 mb-4 text-center">
        합리적인 병원 가격 비교, 아프지마
      </h1>
      <div className="grid grid-cols-5 gap-6 mt-10 mb-10">
        <BackgroundCard
          title="하루 7~8시간, 충분한 수면이 필요해요!"
          description="수면 시간의 중요성"
          imageUrl={BackgroundCardImage}
        />
        <BackgroundCard
          title="편안한 수면을 위한 환경 만들기"
          description="수면 환경 개선하기"
          imageUrl={BackgroundCardImage}
        />
        <BackgroundCard
          title="잠들기전, 스마트폰은 잠시 멀리 두세요"
          description="자기 전 전자기기 사용 줄이기"
          imageUrl={BackgroundCardImage}
        />
        <BackgroundCard
          title="편안한 수면 자세 찾기"
          description="수면 자세와 건강"
          imageUrl={BackgroundCardImage}
        />
        <BackgroundCard
          title="오후 늦게 마시는 커피는 피해주세요!"
          description="카페인 섭취 조절하기"
          imageUrl={BackgroundCardImage}
        />
      </div>
      <div className="grid grid-cols-3 gap-8 mt-12 mb-40 px-4">
        <div className="bg-white shadow-md rounded-md w-64 p-4">
          <p className="w-28 mx-auto bg-blue-500 rounded-full text-center text-white">
            가격정보
          </p>
          <h3 className="mt-4 text-2xl font-bold text-center">
            병원비 비교하기
          </h3>
          <Image
            src={MedicalRecord}
            alt="Medical Record"
            className="mt-4 ml-12"
          />
        </div>
        <div className="bg-white shadow-md rounded-lg w-64 p-4">
          <p className="w-28 mx-auto bg-blue-500 rounded-full text-center text-white">
            위치기반
          </p>
          <h3 className="mt-4 text-2xl font-bold text-center">
            가까운 병원 찾기
          </h3>
          <Image src={Hospital} alt="Hospital" className="mt-4 ml-12" />
        </div>
        <div className="bg-white shadow-md rounded-lg w-64 p-4">
          <p className="w-28 mx-auto bg-blue-500 rounded-full text-center text-white">
            야간 병원
          </p>
          <h3 className="mt-4 text-2xl font-bold text-center">
            야간·주말 병원 찾기
          </h3>
          <Image src={Stethoscope} alt="Stethoscope" className="mt-4 ml-12" />
        </div>
      </div>
    </div>
  );
}
