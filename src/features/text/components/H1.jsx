import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Heading = styled.h1`
  font-family: 'Proza Libre', sans-serif;
`;

const H1 = ({ children }) => <Heading>{children}</Heading>;

H1.propTypes = {
  children: PropTypes.node.isRequired
};

export default H1;
