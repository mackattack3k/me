import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const A = styled.a`
  text-decoration: none;
  color: ${props => props.theme.secondary.main};
  :hover {
    color: ${props => props.theme.secondary.dark};
    text-decoration: underline;
  }
`;

const ExternalLink = ({ to, children }) => (
  <A href={to} target="_blank">
    {children}
  </A>
);

ExternalLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default ExternalLink;
