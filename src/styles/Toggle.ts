import styled from "styled-components";
import { Theme } from "../theme/theme";

interface ToggleProps {
  active: boolean;
}

export const ToggleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  margin-left: 30px;
`;

export const Image = styled.img`
  width: 32px;
  height: 32px;
`;

export const ToggleButton = styled.button<ToggleProps>`
  width: 60px;
  height: 30px;
  border-radius: 20px;
  position: relative;
  background-color: ${({ active }) => (active ? "transparent" : "transparent")};
  transition: 0.2s linear;
  border: 0;
  box-shadow: 0px 0px 2px 1px ${({ theme }: { theme: Theme }) => theme.textColor};

  &::before {
    content: "";
    display: absolute;
    width: 20px;
    height: 20px;
    background-color: ${({ theme }: { theme: Theme }) => theme.textColor};
    box-shadow: 0px 0px 5px 2px ${({ theme }: { theme: Theme }) => theme.textColor};
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: ${({ active }) => (active ? "30px" : "5px")};
    transform: translateY(-50%);
    transition: 0.2s linear;
    &:hover {
      opacity: 1;
    }
  }
`;
