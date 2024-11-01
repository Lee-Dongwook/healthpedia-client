import Image from 'next/image';
import ContentBackgroundImage from '@/assets/img/ContentBackground.png';

const BackgroundImage = () => {
  return (
    <Image
      src={ContentBackgroundImage}
      alt="Content Background Image"
      width={1920}
      height={1080}
      className="mb-0"
    />
  );
};

export default BackgroundImage;
