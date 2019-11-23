import React from 'react';
import { NavLink } from 'react-router-dom';

const NavLinks = () => {
  return (
    <ul className="navigation__links">
      <li className="navigation__item">
        <NavLink
          to="/"
          exact
          className="navigation__link"
          activeClassName="navigation__item--active"
        >Home
        </NavLink>
      </li>
      <li className="navigation__item">
        <NavLink
          to="/favorites"
          className="navigation__link"
          activeClassName="navigation__item--active"
        >Favorites
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;