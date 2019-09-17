import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Comment = styled.div`
  font-size: 14px;
  letter-spacing: 1px;
  display: flex;
  justify-content: center;
  text-align: center;
  flex: 1;
`;

const StatisticsComment = ({ children }) => <Comment>{children}</Comment>;

StatisticsComment.propTypes = {
  children: PropTypes.node
};
StatisticsComment.defaultProps = {
  children: <></>
};

export default StatisticsComment;
