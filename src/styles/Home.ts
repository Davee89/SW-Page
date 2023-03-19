import styled, { css } from "styled-components";

// ? Hero Section Styling

export const Hero = styled.section`
  height: 100vh;
  width: 100%;
  margin-top: 110px;
  background: url("/public/bobafett-bg.png");
  background-position: 30%;
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
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  color: white;
  text-shadow: 4px 4px 5px rgba(255, 255, 255, 1);

  @media (max-width: 768px) {
    font-size: 60px;
  }
`;

export const HeadlinerSpan = styled.span``;

// ? Columns Section Styling

export const ColumnSection = styled.section`
  margin-top: 50px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(3, minmax(300px, 1fr));
  height: 100vh;
  background-color: transparent;
  gap: 10px;
`;
