export enum LikesPostActionsTypes {
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT',
}

export interface ILikesState {
  likes: number;
}

export interface IActionLike {
  type: string;
}
