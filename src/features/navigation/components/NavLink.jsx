import { Link } from '@reach/router';
import React from 'react';

const NavLink = props => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      return {
        style: {
          color: isCurrent ? 'black' : 'grey'
        }
      };
    }}
  />
);

NavLink.propTypes = {};

export default NavLink;
