import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import H1 from '../../text/components/H1';

const Section = styled.div`
  height: 350px;
  display: flex;
  flex-direction: row;
  white-space: pre-line;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;
const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 350px;
`;
const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  @media (max-width: 900px) {
    padding: 5px 0;
    align-items: flex-start;
  }
`;

const HomeSection = ({ title, subTitle, children }) => (
  <Section>
    <TitleSection>
      <H1>{title}</H1>
      <div>{subTitle}</div>
    </TitleSection>
    <Content>{children}</Content>
  </Section>
);

HomeSection.propTypes = {
  title: PropTypes.node.isRequired,
  subTitle: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired
};

export default HomeSection;
