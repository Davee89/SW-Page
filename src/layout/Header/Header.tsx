import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Toggle from '../../components/Toggle/Toggle';
import { HeaderContainer, Logo, Nav, NavigationLink } from '../../styles/Layout';
import { DarkSideContext } from '../../context/DarkSideContext';
import Hamburger from '../../components/Hamburger/Hamburger';

const Header = () => {
  const navigate = useNavigate();
  const { darkSide } = useContext(DarkSideContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <HeaderContainer>
      <Logo
        onClick={() => navigate('/')}
        src={darkSide ? '/public/padawan-dark.svg' : '/public/padawan.svg'}
        alt="logo"
      />
      <Toggle />
      <Hamburger isOpen={isOpen} onClick={setIsOpen} />
      <Nav isOpen={isOpen}>
        <NavigationLink
          to="/"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          Home
        </NavigationLink>
        <NavigationLink
          to="/about-me"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          About Me
        </NavigationLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
