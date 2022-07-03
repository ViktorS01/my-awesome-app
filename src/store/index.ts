import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducers';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { spamFilter } from './middleware/middleware';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, spamFilter)),
);

export default store;
