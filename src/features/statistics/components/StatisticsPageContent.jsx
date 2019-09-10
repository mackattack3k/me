import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Content = styled.div`
  margin: 0 8px;
  max-width: 1000px;
`;

const StatisticsPageContent = ({ children }) => <Content>{children}</Content>;

StatisticsPageContent.propTypes = {
  children: PropTypes.node.isRequired
};

export default StatisticsPageContent;
