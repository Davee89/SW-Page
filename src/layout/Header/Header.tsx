import { useNavigate } from "react-router-dom";
import Toggle from "../../components/Toggle/Toggle";
import { HeaderContainer, Logo, Nav, NavigationLink } from "../../styles/Layout";

const Header = () => {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <Logo onClick={() => navigate(-1)} src="/public/padawan.svg" alt="logo" />
      <Nav>
        <NavigationLink to="/">Home</NavigationLink>
        <NavigationLink to="/about-me">About Me</NavigationLink>
        <Toggle />
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
