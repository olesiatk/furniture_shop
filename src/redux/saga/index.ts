import { all } from 'redux-saga/effects';
import { productsSaga } from './productsSaga';
import { usersSaga } from './usersSaga';

export function* rootSaga(): Generator {
  yield all([productsSaga(), usersSaga()]);
}
