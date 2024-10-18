"use client";

import React from "react";
import HeroButton from "@/common/HeroButton";

export default function Hero() {
  const handleClickGoogleButton = () => {
    alert("Click Google!");
  };
  const handleClickAppleButton = () => {
    alert("Click Apple!");
  };
  return (
    <section className="bg-white py-16 text-center">
      <h1 className="text-4xl font-bold mb-2">병원 가기 전</h1>
      <h1 className="text-4xl font-bold mb-8">아프지마로 가격을 비교하세요</h1>
      <p className="text-lg mb-4">
        전국 가격 정보 제공부터, 야간/주말 진료 가능한 병원과 약국을 한눈에!
      </p>
      <p className="text-lg mb-24">
        지금 가격 비교하고 아프지마로 합리적인 병원을 선택해보세요.
      </p>
      <div className="flex justify-center space-x-16">
        <HeroButton label="Google Play" onClick={handleClickGoogleButton} />
        <HeroButton label="App Store" onClick={handleClickAppleButton} />
      </div>
    </section>
  );
}
