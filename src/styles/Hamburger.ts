import styled, { css } from 'styled-components';

export const HamburgerWrapper = styled.div`
  display: none;

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 30px;
    height: 30px;
    cursor: pointer;
    z-index: 40;
  }

  @media (max-width: 600px) {
    width: 20px;
    height: 20px;
  }
`;

export const Line = styled.span<{ isOpen: boolean }>`
  width: 100%;
  height: 2px;
  background-color: white;
  transition: all 0.3s ease-in-out;

  ${(props) =>
    props.isOpen &&
    css`
      &:nth-child(1) {
        transform: rotate(45deg) translate(8px, 8px);
        @media (max-width: 600px) {
          transform: rotate(45deg) translate(4px, 4px);
        }
      }
      &:nth-child(2) {
        opacity: 0;
      }
      &:nth-child(3) {
        transform: rotate(-45deg) translate(6px, -6px);
        @media (max-width: 600px) {
          transform: rotate(-45deg) translate(6px, -6px);
        }
      }
    `}
`;
