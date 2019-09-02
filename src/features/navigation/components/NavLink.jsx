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
            color: isCurrent ? theme.secondary.main : theme.primary.text
          }
        };
      }}
    />
  );
};

NavLink.propTypes = {};

export default NavLink;
