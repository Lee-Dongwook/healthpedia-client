import Hero from '@/components/templates/contents/Hero';
import Background from '@/components/templates/contents/Background';
import Container from '@/components/templates/contents/Container';
import FirstPhone from '@/components/templates/contents/FirstPhone';
import SecondPhone from '@/components/templates/contents/SecondPhone';
import IconFeature from '@/components/templates/contents/IconFeature';

export default function ContentPage() {
  return (
    <div>
      <Hero />
      <Background />
      <Container />
      <FirstPhone />
      <SecondPhone />
      <IconFeature />
    </div>
  );
}
