import { v4 } from 'uuid';

export const ADD_TOAST = 'addToast';
export const REMOVE_TOAST = 'removeToast';

const toastReducer = (state, action) => {
  const { type } = action;
  if (type === ADD_TOAST) {
    const { message } = action;
    const toast = {
      id: v4(),
      message
    };
    return {
      ...state,
      toasts: { ...state.toasts, [toast.id]: toast }
    };
  }
  if (type === REMOVE_TOAST) {
    const { id } = action;
    const newState = { ...state };
    delete newState.toasts[id];
    return newState;
  }
  throw new Error();
};

export default toastReducer;
