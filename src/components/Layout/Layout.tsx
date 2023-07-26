import { Outlet } from 'react-router-dom';
import { Header } from '../../sections/Header';
import { Footer } from '../../sections/Footer';

export const Layout = () => {
  return (
    <>
      <Header />
        <Outlet />
      <Footer />
    </>
  );
};