import styled from 'styled-components';
import { Theme } from '../theme/theme';

interface ToggleProps {
  active: boolean;
}

export const ToggleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  margin-left: 30px;

  @media (max-width: 600px) {
    gap: 5px;
    margin-left: 10px;
  }
`;

export const Image = styled.img`
  width: 32px;
  height: 32px;

  @media (max-width: 600px) {
    width: 20px;
    height: 20px;
  }
`;

export const ToggleButton = styled.button<ToggleProps>`
  width: 60px;
  height: 30px;
  border-radius: 20px;
  position: relative;
  background-color: ${({ active }) => (active ? 'transparent' : 'transparent')};
  transition: 0.2s linear;
  border: 0;
  box-shadow: 0px 0px 2px 1px ${({ theme }: { theme: Theme }) => theme.textColor};
  :hover {
    box-shadow: inset 0px 0px 2px 1px rgba(1, 1, 1, 0.3);
  }

  @media (max-width: 600px) {
    width: 40px;
    height: 20px;
  }

  &::before {
    content: '';
    display: absolute;
    width: 20px;
    height: 20px;
    background-color: ${({ theme }: { theme: Theme }) => theme.textColor};
    box-shadow: 0px 0px 4px 2px ${({ active }) => (active ? 'rgba(0,0,0, 0.5)' : '#A9BCD4')};
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: ${({ active }) => (active ? '30px' : '5px')};
    transform: translateY(-50%);
    transition: 0.2s linear;

    @media (max-width: 600px) {
      width: 12px;
      height: 12px;
      left: ${({ active }) => (active ? '23px' : '5px')};
    }
  }
`;
