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
  background-color: white;
  position: fixed;
  top: 0;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  border: 1px brown solid;
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
  color: #bca593;
  :hover {
    text-decoration: underline;
  }
  &.active {
    text-decoration: underline;
  }
`;

export const FooterContainer = styled.footer`
  padding: 10px;
  border-top: 2px brown solid;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ShortParagraph = styled.p`
  letter-spacing: 2px;
  text-transform: uppercase;
`;
