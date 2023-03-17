import styled, { keyframes } from 'styled-components';

interface Letter {
  delayed?: boolean;
}

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const HeaderWrapper = styled.p`
  font-size: 4rem;
  text-transform: uppercase;
  text-align: center;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  letter-spacing: 5px;
`;

export const Letter = styled.span<Letter>`
  display: inline-block;
  transform-origin: center;
  animation-name: ${fadeIn};

  animation-duration: 2s;
  animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  animation-fill-mode: forwards;
  opacity: 0;

  &:nth-child(1) {
    animation-delay: ${({ delayed }) => (delayed ? '2s' : '0s')};
  }

  &:nth-child(2) {
    animation-delay: ${({ delayed }) => (delayed ? '2.3s' : '0.3s')};
  }

  &:nth-child(3) {
    animation-delay: ${({ delayed }) => (delayed ? '2.6s' : '0.6s')};
  }
  &:nth-child(4) {
    animation-delay: ${({ delayed }) => (delayed ? '2.9s' : '0.9s')};
  }
  &:nth-child(5) {
    animation-delay: ${({ delayed }) => (delayed ? '3.2s' : '1.2s')};
  }
  &:nth-child(6) {
    animation-delay: ${({ delayed }) => (delayed ? '3.5s' : '1.5s')};
  }
`;
