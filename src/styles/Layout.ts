import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Theme } from '../theme/theme';

interface Menu {
  isOpen: boolean;
}

export const MainContent = styled.main`
  margin: auto;
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  min-height: 95vh;
`;

export const HeaderContainer = styled.header<Menu>`
  box-sizing: border-box;
  background-color: ${({ theme }: { theme: Theme }) => theme.textColorOpacity};
  position: fixed;
  backdrop-filter: ${({ isOpen }) => (isOpen ? 'unset' : 'blur(5px)')};
  top: 0;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px 60px;
  z-index: 10;

  @media (max-width: 600px) {
    padding: 20px;
    justify-content: space-around;
  }
`;

export const Logo = styled.img`
  max-width: 200px;
  max-height: 200px;
  cursor: pointer;

  @media (max-width: 600px) {
    max-width: 100px;
    max-height: 100px;
  }
`;

export const Nav = styled.div<Menu>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 60px;
  text-align: center;
  font-weight: bold;
  color: white;

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 100vh;
    width: 100%;
    gap: 30px;
    position: absolute;
    top: 0;
    left: -100%;
    transform: ${({ isOpen }) => (isOpen ? 'translateX(100%)' : 'translateX(-100%)')};
    z-index: 30;
    background-color: ${({ isOpen }) => (isOpen ? 'rgba(0,0,0,0.7)' : 'transparent')};
    backdrop-filter: blur(10px);
    padding: 140px 0;
    transition: all 0.5s ease-in-out;
  }
`;

export const NavigationLink = styled(NavLink)`
  font-size: 30px;
  text-transform: uppercase;
  font-weight: 700;
  text-decoration: none;
  color: ${({ theme }: { theme: Theme }) => theme.textColor};

  :hover {
    opacity: 0.5;
  }

  &.active {
    text-decoration: underline;
  }
`;

export const FooterContainer = styled.footer`
  padding: 10px;
  border-top: 2px ${({ theme }: { theme: Theme }) => theme.textColor} solid;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

export const ShortParagraph = styled.p`
  letter-spacing: 2px;
  text-align: center;
  text-transform: uppercase;
  color: ${({ theme }: { theme: Theme }) => theme.textColor};
`;
