import React from 'react';
import NavLinks from './NavLinks/NavLinks'
import Logo from '../Logo/Logo';
import TempCheckBox from '../UI/TempCheckBox/TempCheckBox'

const Navigation = props => {
    return (
        <div className="navigation">
            <React.Fragment> 
                <Logo />
                <NavLinks />
                <div className="navigation__settings">
                    <TempCheckBox />
                </div>
            </React.Fragment>
        </div>
    );
};

export default Navigation;