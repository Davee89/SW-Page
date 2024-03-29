import {
  AboutMeParagraph,
  DetailsWrapper,
  ParagraphWrapper,
  Picture,
  PictureWrapperBottomLeft,
  PictureWrapperBottomRight,
  PictureWrapperTop,
} from '../../styles/MyDetails';

const MyDetails = () => {
  return (
    <DetailsWrapper>
      <PictureWrapperTop>
        <Picture circle src="/me.webp" />
      </PictureWrapperTop>
      <ParagraphWrapper>
        <AboutMeParagraph>
          As a junior front-end developer, I am eager to learn and improve my coding skills. With limited experience, I
          make up for it with passion for work, attention to detail, and diligence. I dedicate my free time to
          furthering my education and putting my skills into practice. Proficient in HTML, CSS, and JavaScript, I am
          committed to delivering quality results. Looking for opportunities to grow and contribute to a dynamic team
          environment.
        </AboutMeParagraph>
      </ParagraphWrapper>
      <PictureWrapperBottomLeft>
        <Picture src="/photo-1.webp" />
      </PictureWrapperBottomLeft>
      <PictureWrapperBottomRight>
        <Picture src="/photo-2.webp" />
      </PictureWrapperBottomRight>
    </DetailsWrapper>
  );
};

export default MyDetails;
