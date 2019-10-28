import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {

    return (
        <Link className='logo' to="/">
            <h1 className="logo__title">Herolo Weather</h1>
        </Link>
    );
};

export default Logo;