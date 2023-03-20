import styled, { css, keyframes } from 'styled-components';
import { Theme } from '../theme/theme';

interface Picture {
  circle?: boolean;
}

const showUp = keyframes`

0% {
opacity: 0;
transform: scale(0.7);
}
100% {
  opacity: 1;
  transform: scale(1);
}
`;

export const DetailsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 30px;
  max-width: 1000px;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
`;

const PictureWrapper = css`
  position: relative;
`;

export const PictureWrapperTop = styled.div`
  ${PictureWrapper}
  grid-column: 1/2;
  grid-row: 1/2;
  border-radius: 25px;
`;

export const PictureWrapperBottomLeft = styled.div`
  ${PictureWrapper}
  grid-column: 1/3;
  grid-row: 2/3;
`;

export const PictureWrapperBottomRight = styled.div`
  ${PictureWrapper}
  grid-column: 3/5;
  grid-row: 2/3;
`;

export const ParagraphWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  padding: 20px;
  grid-column: 2/5;
  grid-row: 1/2;
`;

export const AboutMeParagraph = styled.p`
  font-size: 16px;
  line-height: 1.5;
  text-align: justify;
  padding: 30px;
`;

export const Picture = styled.img<Picture>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  box-shadow: 0px 5px 20px ${({ theme }: { theme: Theme }) => theme.textColor};
  animation: ${showUp} 2s linear;
  transition: transform 0.2s ease-out;
  border-radius: ${({ circle }) => (circle ? '50%' : '5%')};
  &:hover {
    transform: scale(1.05);
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 20px;
  }
`;
