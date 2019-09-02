import React from 'react';
import styled from 'styled-components';
import H1 from '../../text/components/H1';

const Section = styled.div`
  min-height: 300px;
`;

const HomeSection = ({ title, children }) => (
  <Section>
    <H1>{title}</H1>
    {children}
  </Section>
);

export default HomeSection;
