import { combineReducers } from 'redux';
import { likesReducer } from './likesReducer';
import { commentsReducer } from './commentsReducer';
import { popupReducer } from './popupReducer';

export const rootReducer = combineReducers({
  likesReducer,
  commentsReducer,
  popupReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
