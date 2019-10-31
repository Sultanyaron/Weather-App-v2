import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <Link className='navigation__logo' to="/">
            <h1>Herolo Weather</h1>
        </Link>
    );
};

export default Logo;