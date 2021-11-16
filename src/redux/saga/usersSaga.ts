import { put, takeEvery } from 'redux-saga/effects';

import { ADD_USER_INIT } from 'redux/actionTypes';
import {
  addUserSuccess,
  UserDataType,
  getUserData,
  getUserOrders,
  setLogin,
  setError,
} from 'redux/actions';
import { addUser } from 'api';

function* fetchUser(action: { payload: { userData: UserDataType }; type: string }) {
  const { userData } = action.payload;
  try {
    const id: string = yield addUser(userData).then((response) => response.data.id);
    yield put(addUserSuccess(id, userData));
    yield put(setLogin(userData.email, userData.password));
    yield put(getUserData(userData.email));
    yield put(getUserOrders(userData.email));
  } catch (error) {
    yield put(setError(error.message));
  }
}

export function* usersSaga(): Generator {
  yield takeEvery(ADD_USER_INIT, fetchUser);
}
