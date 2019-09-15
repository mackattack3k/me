import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = styled.input`
  border: solid 1px #dcdcdc;
  resize: vertical;
  padding: 8px 10px;
  outline: none;
  width: 100%;
  box-sizing: border-box;
`;

const TextInput = ({ field: { name, value, onChange, onBlur } }, type) => (
  <Input
    name={name}
    onChange={onChange}
    value={value}
    onBlur={onBlur}
    type={type}
  />
);

TextInput.propTypes = {
  field: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired
  }).isRequired
};

export default TextInput;
