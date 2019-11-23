import React from 'react';
import NavLinks from './NavLinks/NavLinks';
import Logo from '../Logo/Logo';
import TempCheckBox from '../UI/TempCheckBox/TempCheckBox';

const Navigation = () => {
  return (
    <div className="navigation">
      <>
        <Logo />
        <NavLinks />
        <div className="navigation__settings">
          <TempCheckBox />
        </div>
      </>
    </div>
  );
};

export default Navigation;