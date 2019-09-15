import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PrimaryButton = styled.button`
  padding: 4px 12px;
  font-size: 16px;
  border: none;
  margin: 0;
  border-radius: 2px;
  outline: none;
  background: transparent;
  color: #3e3e3e;
  background: ${props => props.theme.secondary.main};
  cursor: pointer;
  :disabled {
    opacity: 0.6;
  }
`;

const Button = ({ onClick, children, type, disabled }) => (
  <PrimaryButton onClick={onClick} type={type} disabled={disabled}>
    {children}
  </PrimaryButton>
);

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  type: PropTypes.oneOf(['submit', 'button']),
  disabled: PropTypes.bool
};
Button.defaultProps = {
  onClick: () => {},
  children: '',
  type: 'button',
  disabled: false
};

export default Button;
