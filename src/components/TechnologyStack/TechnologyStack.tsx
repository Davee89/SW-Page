import { SingleTechnology, TechnologyImage, TechnologyRating } from '../../styles/TechnologyStack';

type Props = {
  src: string;
  alt: string;
  title: string;
  percentage: string;
};

const TechnologyStack = ({ src, alt, percentage }: Props) => {
  return (
    <SingleTechnology>
      <TechnologyImage src={src} alt={alt} title={alt} />
      <TechnologyRating>{percentage}</TechnologyRating>
    </SingleTechnology>
  );
};

export default TechnologyStack;
