import { Link } from '@reach/router';
import React, { useContext } from 'react';

import { ThemeContext } from 'styled-components';

const NavBarLink = props => {
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

NavBarLink.propTypes = {};

export default NavBarLink;
