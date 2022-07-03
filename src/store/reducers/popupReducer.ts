import { IActionLike, IPopupState, PopupActionsTypes } from '../types/popup';

const initialState: IPopupState = {
  text: '',
  show: false,
};

export const popupReducer = (state = initialState, action: IActionLike) => {
  switch (action.type) {
    case PopupActionsTypes.SHOW_POPUP:
      return { ...state, show: true, text: action.payload.text };
    case PopupActionsTypes.HIDE_POPUP:
      return { ...initialState };
    default:
      return state;
  }
};
