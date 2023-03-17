import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const MainContent = styled.main`
  margin: 0 auto;
  max-width: 1000px;
  min-height: 85vh;
  position: relative;
`;

export const HeaderContainer = styled.header`
  box-sizing: border-box;
  background-color: transparent;
  position: fixed;
  backdrop-filter: blur(5px);
  top: 0;
  width: 100vw;
  display: flex;
  justify-content: space-between;

  padding: 20px 60px;
  z-index: 10;
`;

export const Logo = styled.img`
  max-width: 200px;
  max-height: 200px;
  cursor: pointer;
`;

export const Nav = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 60px;
`;

export const NavigationLink = styled(NavLink)`
  font-size: 30px;
  text-transform: uppercase;
  font-weight: 700;
  text-decoration: none;
  color: rgba(187, 211, 255, 1);
  text-shadow: 1px 1px 2px rgba(255, 255, 255, 1);
  :hover {
    text-decoration: underline;
  }
  &.active {
    text-decoration: underline;
  }
`;

export const FooterContainer = styled.footer`
  padding: 10px;
  border-top: 2px rgba(187, 211, 255, 1) solid;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ShortParagraph = styled.p`
  letter-spacing: 2px;
  text-transform: uppercase;
  color: rgba(187, 211, 255, 1);
`;
