import { LikesPostActionsTypes } from '../types/likes';

const initialState = {
  likes: 0,
};

interface IAction {
  type: string;
}

export const likesReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case LikesPostActionsTypes.INCREMENT:
      return { ...state, likes: state.likes + 1 };
    case LikesPostActionsTypes.DECREMENT:
      return { ...state, likes: state.likes - 1 };
    default:
      return state;
  }
};
