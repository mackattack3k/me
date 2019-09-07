import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  background-color: ${props => props.theme.background};
  min-height: 100px;
  flex: 1;
  border-radius: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  margin: 8px;
`;

const StatisticsCard = ({ children }) => <Card>{children}</Card>;

StatisticsCard.propTypes = {
  children: PropTypes.node
};
StatisticsCard.defaultProps = {
  children: <></>
};

export default StatisticsCard;
