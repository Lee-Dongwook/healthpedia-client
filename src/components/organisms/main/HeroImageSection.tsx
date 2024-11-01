import Image from 'next/image';
import HeroImage from '@/assets/img/Hero-logo.png';

const HeroImageSection = () => {
  return (
    <div className="flex justify-center items-center">
      <Image src={HeroImage} alt="Hero Image" width={600} />
    </div>
  );
};

export default HeroImageSection;
