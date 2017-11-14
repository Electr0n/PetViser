import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';

const initialState = {
};

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(thunk, logger))
);

export default store;
