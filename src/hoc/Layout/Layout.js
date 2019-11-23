import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      { children }
      <Footer />
    </>
  );
};

export default Layout;