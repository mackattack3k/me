import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';
import styled from 'styled-components';

const LinkText = styled.div`
  > a {
    text-decoration: none;
    color: ${props => props.theme.primary.text};
    font-weight: bold;
    :hover {
      text-decoration: underline;
    }
  }
`;

const InternalLink = ({ to, children }) => (
  <LinkText>
    <Link to={to}>{children}</Link>
  </LinkText>
);

InternalLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default InternalLink;
