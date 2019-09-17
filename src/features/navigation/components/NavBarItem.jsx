import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import NavBarLink from './NavBarLink';

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

const NavBarItem = ({ to, icon, children, ariaLabel }) => (
  <NavBarLink to={to} aria-label={ariaLabel}>
    <Navigation>
      <FontAwesomeIcon icon={icon} />
      <LinkText>{children}</LinkText>
    </Navigation>
  </NavBarLink>
);

NavBarItem.propTypes = {
  to: PropTypes.string.isRequired,
  icon: PropTypes.shape().isRequired,
  children: PropTypes.node.isRequired,
  ariaLabel: PropTypes.string.isRequired
};

export default NavBarItem;
