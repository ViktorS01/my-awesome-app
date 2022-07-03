export enum CommentsPostActionsTypes {
  ADD_COMMENT = 'ADD_COMMENT',
  DELETE_COMMENT = 'DELETE_COMMENT',
}

interface IComment {
  value: string;
  id: number;
}

export interface ICommentsState {
  comments: Array<IComment>;
}

export interface IActionComments {
  type: string;
  payload: {
    value: string;
    id: number;
  };
}
