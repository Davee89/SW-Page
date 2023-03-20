import styled, { css } from 'styled-components';
import { Theme } from '../theme/theme';

export const Hero = styled.section`
  height: 100vh;
  width: 100%;
  margin-top: 110px;
  background: url('/public/bobafett-bg.webp');
  background-position: 30%;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    background-position: 20%;
  }
`;

const ContainerCss = css`
  width: 50%;
  height: 100%;
  display: flex;
`;

export const EmptyContainer = styled.div`
  ${ContainerCss}

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Headliner = styled.h1`
  font-size: 100px;
  display: flex;
  align-items: flex-end;
  padding: 20px;
  align-self: center;
  flex-direction: column;
  justify-content: start;
  color: white;
  border-width: 4px;
  border-style: solid;
  border-image: linear-gradient(
      to right top,
      ${({ theme }: { theme: Theme }) => theme.textColor} 0%,
      transparent 20%,
      transparent 80%,
      ${({ theme }: { theme: Theme }) => theme.textColor} 100%
    )
    1;
  text-shadow: 4px 4px 5px ${({ theme }: { theme: Theme }) => theme.textColor};

  @media (max-width: 768px) {
    font-size: 60px;
  }
`;

export const ColumnSection = styled.section`
  margin-top: 50px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  min-height: 100vh;
  background-color: transparent;
  gap: 10px;
`;
