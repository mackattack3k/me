import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import LoadingSpinner from '../../loading/components/LoadingSpinner';

const CardData = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 10px 0;
  font-size: 28px;
  color: ${props => props.theme.secondary.main};
`;

const StatisticsCardData = ({ isLoading, children }) => (
  <CardData>{isLoading ? <LoadingSpinner /> : children}</CardData>
);

StatisticsCardData.propTypes = {
  children: PropTypes.node,
  isLoading: PropTypes.bool
};
StatisticsCardData.defaultProps = {
  isLoading: false,
  children: <></>
};

export default StatisticsCardData;
