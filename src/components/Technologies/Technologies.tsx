import styled from 'styled-components';
import TechnologyStack from '../TechnologyStack/TechnologyStack';

const technologies = [
  { src: '/public/logos/html.png', alt: 'Html', percentage: '70%' },
  { src: '/public/logos/css.png', alt: 'Css', percentage: '60%' },
  { src: '/public/logos/javascript.png', alt: 'Javascript', percentage: '50%' },
  { src: '/public/logos/typescript.png', alt: 'Typescript', percentage: '30%' },
  { src: '/public/logos/react-logo.png', alt: 'React', percentage: '40%' },
  { src: '/public/logos/github.png', alt: 'Github', percentage: '40%' },
];

export const TechnologiesWrapper = styled.div`
  grid-column: 1/4;
  grid-row: 5/6;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 10px;
`;

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
