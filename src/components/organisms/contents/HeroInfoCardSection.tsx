import InfoCard from '@/components/molecules/content/InfoCard';
import { ContentHeroInfoCardData } from '@/lib/ContentHeroInfoCardData';

const HeroInfoCardSection = () => {
  return (
    <div className="grid grid-cols-5 gap-4 mt-20 mb-10">
      {ContentHeroInfoCardData.map(content => (
        <InfoCard
          key={content.title}
          imageUrl={content.imageUrl}
          title={content.title}
          description={content.description}
          linkHref={content.linkHref}
        />
      ))}
    </div>
  );
};
export default HeroInfoCardSection;
