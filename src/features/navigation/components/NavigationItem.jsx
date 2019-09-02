import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import React from 'react';
import NavLink from './NavLink';

const Navigation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 25px 0;
`;

const NavigationItem = ({ to, icon, children, isExpanded = false }) => (
  <Navigation>
    <NavLink to={to}>
      <FontAwesomeIcon icon={icon} />
      {isExpanded && <div>{children}</div>}
    </NavLink>
  </Navigation>
);

export default NavigationItem;
