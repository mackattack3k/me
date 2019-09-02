import React from 'react';
import { CONTACT_PAGE } from '../../contact/contactRoutes';
import { HOME_PAGE } from '../../home/homeRoutes';
import { STATISTICS_PAGE } from '../../statistics/statisticsRoutes';
import NavLink from './NavLink';

const HeaderNavigation = () => {
  return (
    <div>
      <div>mackattack3k</div>
      <nav>
        <NavLink to={HOME_PAGE}>Home</NavLink>
        <NavLink to={CONTACT_PAGE}>Contact</NavLink>
        <NavLink to={STATISTICS_PAGE}>Statistics</NavLink>
      </nav>
    </div>
  );
};

export default HeaderNavigation;
