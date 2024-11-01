import BackgroundCardImage from '@/assets/img/BackgroundCard.png';
import BackgroundCard from '@/components/molecules/content/BackgroundCard';

const BackgroundCardSection = () => {
  return (
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
  );
};

export default BackgroundCardSection;
