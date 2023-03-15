import { Outlet } from 'react-router-dom';
import { MainContent } from '../styles/Layout';
import Footer from './Footer/Footer';
import Header from './Header/Header';

const Layout = () => {
  return (
    <>
      <Header />
      <MainContent>
        <Outlet />
      </MainContent>
      <Footer />
    </>
  );
};

export default Layout;
