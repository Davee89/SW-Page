import { useNavigate } from 'react-router-dom';
import { HeaderContainer, Logo, Nav, NavigationLink } from '../../styles/Layout';

const Header = () => {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <Logo onClick={() => navigate('/')} src="/public/default-monochrome.svg" alt="logo" />
      <Nav>
        <NavigationLink to="/">Home</NavigationLink>
        <NavigationLink to="/about-me">About Me</NavigationLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
