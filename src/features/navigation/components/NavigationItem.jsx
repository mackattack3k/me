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

const LinkText = styled.div`
  margin: 5px 0;
  font-size: 12px;
  letter-spacing: 1.3px;
`;

const NavigationItem = ({ to, icon, children }) => (
  <Navigation>
    <NavLink to={to}>
      <FontAwesomeIcon icon={icon} />
      <LinkText>{children}</LinkText>
    </NavLink>
  </Navigation>
);

export default NavigationItem;
