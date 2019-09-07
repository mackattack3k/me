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
  color: ${props => props.theme.primary.text};
  background: ${props => props.theme.secondary.main};
  cursor: pointer;
`;

const Button = ({ onClick, children, type }) => (
  <PrimaryButton onClick={onClick} type={type}>
    {children}
  </PrimaryButton>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node,
  type: PropTypes.oneOf(['submit', 'button'])
};
Button.defaultProps = {
  children: '',
  type: 'button'
};

export default Button;
