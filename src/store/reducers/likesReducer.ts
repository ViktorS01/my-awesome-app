import {
  IActionLike,
  ILikesState,
  LikesPostActionsTypes,
} from '../types/likes';

const initialState: ILikesState = {
  likes: 0,
};

export const likesReducer = (state = initialState, action: IActionLike) => {
  switch (action.type) {
    case LikesPostActionsTypes.INCREMENT:
      return { ...state, likes: state.likes + 1 };
    case LikesPostActionsTypes.DECREMENT:
      return { ...state, likes: state.likes - 1 };
    default:
      return state;
  }
};
