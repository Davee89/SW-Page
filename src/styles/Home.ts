import styled, { css } from 'styled-components';

export const Hero = styled.div`
  width: 99.1vw;
  height: 100vh;
  margin-top: 110px;
  background-image: url('/public/bobafett.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  @media (max-width: 768px) {
    background-position: 20%;
  }
`;

const ContainerCss = css`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  ${ContainerCss}
  @media (max-width: 768px) {
    padding: 25%;
  }
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
  flex-direction: column;
  color: white;
  text-shadow: 4px 4px 5px rgba(113, 66, 37, 0.89);

  @media (max-width: 768px) {
    font-size: 60px;
  }
`;

export const HeadlinerSpan = styled.span``;
