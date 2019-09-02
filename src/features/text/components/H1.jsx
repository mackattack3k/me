import React from 'react';
import styled from 'styled-components';

const Heading = styled.h1`
  font-family: 'Proza Libre', sans-serif;
`;

const H1 = ({ children }) => <Heading>{children}</Heading>;

export default H1;
