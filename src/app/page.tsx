import Hero from '@/components/templates/main/Hero';
import Info from '@/components/templates/main/Info';
import GsapAnimation from '@/components/templates/main/GsapAnimation';
import ImageSwiperSection from '@/components/templates/main/ImageSwiperSection';
import TimeLineSection from '@/components/templates/main/TimeLineSection';
import Bottom from '@/components/templates/main/Bottom';

export default function HomePage() {
  return (
    <div>
      <Hero />
      <Info />
      <GsapAnimation />
      <ImageSwiperSection />
      <TimeLineSection />
      <Bottom />
    </div>
  );
}
