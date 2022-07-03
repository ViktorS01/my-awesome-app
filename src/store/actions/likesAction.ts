import { LikesPostActionsTypes } from '../types/likes';

export const incrementLikes = () => {
  return {
    type: LikesPostActionsTypes.INCREMENT,
  };
};

export const decrementLikes = () => {
  return {
    type: LikesPostActionsTypes.DECREMENT,
  };
};
