import Hero from '@/components/templates/main/Hero';
import Background from '@/components/templates/main/Background';
import GsapAnimation from '@/components/templates/main/GsapAnimation';
import ImageSwiper from '@/components/templates/main/ImageSwiper';
import TimeLine from '@/components/templates/main/TimeLine';
import Bottom from '@/components/templates/main/Bottom';

export default function HomePage() {
  return (
    <div>
      <Hero />
      <Background />
      <GsapAnimation />
      <ImageSwiper />
      <TimeLine />
      <Bottom />
    </div>
  );
}
