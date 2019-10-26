import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {

    return (
        <Link to="/">
            <div className="logo">
                <h1 className="logo__title">Herolo Weather</h1>
            </div>
        </Link>
    );
};

export default Logo;