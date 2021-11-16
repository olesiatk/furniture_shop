import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { allReducers } from 'redux/reducers';
import { rootSaga } from './saga';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const reduxExtension = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  allReducers,
  compose(applyMiddleware(sagaMiddleware), reduxExtension())
);
sagaMiddleware.run(rootSaga);
