import styled, { css } from 'styled-components';

// ? Hero Section Styling

export const Hero = styled.section`
  position: relative;
  height: 100vh;
  width: 100%;
  margin-top: 110px;
  background: url('/public/bobafett.jpg');
  background-position: 20%;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
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

// ? Columns Section Styling

export const ColumnSection = styled.section`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 95vh;
  background-color: #d0d1cb;
`;

export const ColumnContainer = styled.div`
  justify-self: center;
`;
