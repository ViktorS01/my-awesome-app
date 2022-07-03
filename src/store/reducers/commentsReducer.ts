import {
  ICommentsState,
  CommentsPostActionsTypes,
  IActionComments,
} from '../types/comments';

const initialState: ICommentsState = {
  comments: [],
};

export const commentsReducer = (
  state = initialState,
  action: IActionComments,
) => {
  switch (action.type) {
    case CommentsPostActionsTypes.ADD_COMMENT:
      return {
        ...state,
        comments: [
          ...state.comments,
          { value: action.payload.value, id: action.payload.id },
        ],
      };
    default:
      return state;
  }
};
