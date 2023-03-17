import styled, { keyframes } from 'styled-components';

const crawlDownAnimation = keyframes`
  0% {
    transform: translateY(-200%);
  }
  99% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0%)
  }
`;

const crawlUpAnimation = keyframes`
  0% {
    transform: translateY(400%);
    opacity: 0.4;
  }
  99% {
    transform: translateY(1%);
    opacity: 0.4 ;
  }
  100% {
    transform: translateY(0%) ;
    opacity: 1;
  }
`;

export const StarWarsTextContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: transparent;
  overflow: hidden;
`;

export const CrawlDownWrapper = styled.div`
  position: absolute;
  top: 100%;
  transform: translateY(-50%);
  width: 100%;
  height: auto;
  animation: ${crawlDownAnimation} 30s linear forwards;
  color: rgba(255, 255, 255, 1);
`;

export const TitleWrapper = styled.div`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 1rem;
`;

export const CrawlUpWrapper = styled.p`
  font-size: 1.5rem;
  text-align: justify;
  white-space: pre-line;
  animation: ${crawlUpAnimation} 30s alternate forwards;
  color: rgba(255, 255, 255, 1);
`;
