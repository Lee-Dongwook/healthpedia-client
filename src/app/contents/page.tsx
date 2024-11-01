import Hero from '@/components/templates/contents/Hero';
import Background from '@/components/templates/contents/Background';
import Container from '@/components/templates/contents/Container';
import FirstPhone from '@/components/templates/contents/FirstPhone';
import SecondPhone from '@/components/templates/contents/SecondPhone';
import IconFeature from '@/components/templates/contents/IconFeature';
import BackgroundImage from '@/components/templates/contents/BackgroundImage';
// import ImagePair from '@/components/templates/contents/ImagePair';
import BottomImageSection from '@/components/templates/contents/BottomImageSection';
import Bottom from '@/components/templates/main/Bottom';

export default function ContentPage() {
  return (
    <div>
      <Hero />
      <Background />
      <Container />
      <FirstPhone />
      <SecondPhone />
      <IconFeature />
      <BackgroundImage />
      <BottomImageSection />
      {/* <ImagePair /> */}
      <Bottom />
    </div>
  );
}
