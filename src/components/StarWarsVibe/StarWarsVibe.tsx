import { CrawlDownWrapper, CrawlUpWrapper, StarWarsTextContainer, TitleWrapper } from '../../styles/StarWarsVibe';

type Props = {
  text: string;
};

const StarWarsFallingText = ({ text }: Props) => {
  return (
    <StarWarsTextContainer>
      <CrawlDownWrapper>
        <TitleWrapper>
          <p>{text}</p>
        </TitleWrapper>
      </CrawlDownWrapper>
      <CrawlUpWrapper>{text}</CrawlUpWrapper>
    </StarWarsTextContainer>
  );
};

export default StarWarsFallingText;
