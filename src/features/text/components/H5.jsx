import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Heading = styled.h5`
  font-family: 'Proza Libre', sans-serif;
`;

const H5 = ({ children }) => <Heading>{children}</Heading>;

H5.propTypes = {
  children: PropTypes.node.isRequired
};

export default H5;
