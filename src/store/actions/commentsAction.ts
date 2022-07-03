import { CommentsPostActionsTypes } from '../types/comments';

export const addComment = (comment: string, id: number) => {
  return {
    type: CommentsPostActionsTypes.ADD_COMMENT,
    payload: {
      value: comment,
      id: id,
    },
  };
};
