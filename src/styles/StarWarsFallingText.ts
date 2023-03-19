import styled, { keyframes } from "styled-components";

const crawlDownAnimation = keyframes`
  0% {
    transform: translateY(-125%);
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
    transform: translateY(200%);
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
  border-radius: 50px;
  padding-top: 30px;
`;

export const CrawlDownWrapper = styled.div`
  position: absolute;
  top: 100%;
  transform: translateY(-50%);
  width: 100%;
  height: auto;
  padding: 0;
  animation: ${crawlDownAnimation} 240s linear forwards;
  color: rgba(255, 255, 255, 1);
  text-shadow: 4px 4px 5px rgba(187, 211, 255, 1);
  line-height: 6;
`;

export const TitleWrapper = styled.div`
  font-size: 1.3rem;
  text-align: center;
  margin-bottom: 1rem;
  font-weight: 900;
  color: white;
`;

export const CrawlUpWrapper = styled.p`
  font-size: 1.3rem;
  text-align: justify;
  white-space: pre-line;
  animation: ${crawlUpAnimation} 200s alternate forwards;
  color: rgba(255, 255, 255, 1);
`;
