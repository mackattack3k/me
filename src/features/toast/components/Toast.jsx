import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ToastCard = styled.div`
  padding: 15px 10px;
  margin: 10px 5vw;
  background: ${props => props.theme.backgroundFadeFrom};
  color: ${props => props.theme.primary.text};
  width: 350px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  white-space: pre-line;
  box-sizing: border-box;
  max-width: 400px;
  @media (max-width: 900px) {
    width: 90vw;
  }
`;
const TOAST_TIME_TO_LIVE = 5000;
const Toast = ({ children, handleRemove }) => {
  useEffect(() => {
    setTimeout(() => {
      handleRemove();
    }, TOAST_TIME_TO_LIVE);
  }, [handleRemove]);
  return <ToastCard>{children}</ToastCard>;
};

Toast.propTypes = {
  children: PropTypes.node.isRequired,
  handleRemove: PropTypes.func.isRequired
};

export default Toast;
