import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import React from 'react';
import NavLink from './NavLink';

const Navigation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 25px 0;
  width: 100%;
  :hover {
    color: ${props => props.theme.secondary.main};
  }
`;

const LinkText = styled.div`
  margin: 5px 0;
  font-size: 12px;
  letter-spacing: 1.3px;
  font-weight: bold;
  @media (max-width: 900px) {
    display: none;
  }
`;

const NavigationItem = ({ to, icon, children }) => (
  <NavLink to={to}>
    <Navigation>
      <FontAwesomeIcon icon={icon} />
      <LinkText>{children}</LinkText>
    </Navigation>
  </NavLink>
);

export default NavigationItem;
