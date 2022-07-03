import { PopupActionsTypes } from '../types/popup';
import { Dispatch } from 'redux';

export const showPopup = (text: string) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: PopupActionsTypes.SHOW_POPUP,
      payload: {
        text: text,
      },
    });

    setTimeout(() => {
      dispatch(hidePopup());
    }, 2000);
  };
};

export const hidePopup = () => {
  return {
    type: PopupActionsTypes.HIDE_POPUP,
  };
};
