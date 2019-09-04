import React from 'react';
import styled from 'styled-components';

const A = styled.a`
  text-decoration: none;
  font-weight: bold;
  color: ${props => props.theme.secondary.main};
  :hover {
    color: ${props => props.theme.secondary.dark};
  }
`;

const ExternalLink = ({ to, children }) => (
  <A href={to} target="_blank">
    {children}
  </A>
);

export default ExternalLink;
