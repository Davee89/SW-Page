import { TechnologiesWrapper } from '../../styles/Technologies';
import TechnologyStack from '../TechnologyStack/TechnologyStack';

const technologies = [
  { src: '/logos/html.webp', alt: 'Html', percentage: '70%' },
  { src: '/logos/css.webp', alt: 'Css', percentage: '60%' },
  { src: '/logos/javascript.webp', alt: 'Javascript', percentage: '50%' },
  { src: '/logos/typescript.webp', alt: 'Typescript', percentage: '30%' },
  { src: '/logos/react-logo.webp', alt: 'React', percentage: '40%' },
  { src: '/logos/github.webp', alt: 'Github', percentage: '40%' },
];

const Technologies = () => {
  return (
    <TechnologiesWrapper>
      {technologies.map(({ src, alt, percentage }) => (
        <TechnologyStack key={alt} src={src} alt={alt} title={alt} percentage={percentage} />
      ))}
    </TechnologiesWrapper>
  );
};

export default Technologies;
