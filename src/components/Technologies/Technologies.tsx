import { TechnologiesWrapper } from '../../styles/Technologies';
import TechnologyStack from '../TechnologyStack/TechnologyStack';

const technologies = [
  { src: '/public/logos/html.webp', alt: 'Html', percentage: '70%' },
  { src: '/public/logos/css.webp', alt: 'Css', percentage: '60%' },
  { src: '/public/logos/javascript.webp', alt: 'Javascript', percentage: '50%' },
  { src: '/public/logos/typescript.webp', alt: 'Typescript', percentage: '30%' },
  { src: '/public/logos/react-logo.webp', alt: 'React', percentage: '40%' },
  { src: '/public/logos/github.webp', alt: 'Github', percentage: '40%' },
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
