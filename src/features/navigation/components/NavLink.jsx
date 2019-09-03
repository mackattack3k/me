import { Link } from '@reach/router';
import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

const NavLink = props => {
  const theme = useContext(ThemeContext);
  return (
    <Link
      {...props}
      getProps={({ isCurrent }) => {
        return {
          style: {
            textDecoration: 'none',
            color: isCurrent ? theme.secondary.main : theme.background
          }
        };
      }}
    />
  );
};

NavLink.propTypes = {};

export default NavLink;
