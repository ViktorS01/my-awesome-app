export enum PopupActionsTypes {
  SHOW_POPUP = 'SHOW_POPUP',
  HIDE_POPUP = 'HIDE_POPUP',
}

export interface IPopupState {
  text: string;
  show: boolean;
}

export interface IActionLike {
  type: string;
  payload: {
    text: string;
  };
}
