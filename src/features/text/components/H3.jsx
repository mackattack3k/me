import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Heading = styled.h3`
  font-family: 'Proza Libre', sans-serif;
`;

const H3 = ({ children }) => <Heading>{children}</Heading>;

H3.propTypes = {
  children: PropTypes.node.isRequired
};

export default H3;
