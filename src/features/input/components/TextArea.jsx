import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = styled.textarea`
  border: solid 1px #dcdcdc;
  resize: vertical;
  padding: 8px 10px;
  outline: none;
  width: 100%;
  box-sizing: border-box;
  min-height: 125px;
`;
const TextArea = ({ field: { name, value, onChange, onBlur }, ...props }) => (
  <Input
    name={name}
    onChange={onChange}
    value={value}
    onBlur={onBlur}
    /* eslint-disable-next-line react/jsx-props-no-spreading */
    {...props}
  />
);

TextArea.propTypes = {
  field: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired
  }).isRequired
};

export default TextArea;
