import styled, { css } from 'styled-components';
import React from 'react';

type Props = {
  isOpen: boolean;
  onClick: React.Dispatch<React.SetStateAction<boolean>>;
};

const Hamburger = ({ isOpen, onClick }: Props) => {
  return (
    <Container onClick={() => onClick(!isOpen)}>
      <Line isOpen={isOpen} />
      <Line isOpen={isOpen} />
      <Line isOpen={isOpen} />
    </Container>
  );
};

const Container = styled.div`
  display: none;

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 20px;
    height: 20px;
    cursor: pointer;
    z-index: 40;
    border: 1px black;
  }
`;

const Line = styled.span<{ isOpen: boolean }>`
  width: 100%;
  height: 2px;
  background-color: black;
  transition: all 0.3s ease-in-out;

  ${(props) =>
    props.isOpen &&
    css`
      &:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
      }
      &:nth-child(2) {
        opacity: 0;
      }
      &:nth-child(3) {
        transform: rotate(-45deg) translate(4px, -4px);
      }
    `}
`;

export default Hamburger;
