import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import Toast from './Toast';
import toastReducer, { ADD_TOAST, REMOVE_TOAST } from './toastReducer';

const ToastContext = createContext(null);
const INITIAL_STATE = {
  toasts: {}
};

const Toasts = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
`;
const ToastProvider = ({ children }) => {
  const { t } = useTranslation();
  const [{ toasts }, dispatch] = useReducer(toastReducer, INITIAL_STATE);
  const addToast = translationKey => {
    const message = t([translationKey, 'error.unknown']);
    dispatch({
      type: ADD_TOAST,
      message
    });
  };
  const removeToast = id => {
    dispatch({
      type: REMOVE_TOAST,
      id
    });
  };
  return (
    <ToastContext.Provider
      value={{
        addToast
      }}
    >
      <>
        {children}
        <Toasts>
          {Object.values(toasts).map(({ id, message }) => (
            <Toast
              key={`toast-${id}`}
              id={id}
              handleRemove={() => removeToast(id)}
            >
              {message}
            </Toast>
          ))}
        </Toasts>
      </>
    </ToastContext.Provider>
  );
};

ToastProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export { ToastProvider, ToastContext };
