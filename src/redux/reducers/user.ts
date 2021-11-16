import produce from 'immer';

import {
  ADD_USER_SUCCESS,
  CHANGE_USER_DATA,
  GET_USER_DATA,
  ADD_USER_INIT,
  SET_LOGOUT,
} from 'redux/actionTypes';
import { UserDataType } from 'redux/actions';
import { getStorageItem, setStorageItem, userData } from 'utils';
import { userAdmin } from 'projectConstants';

const defaultUser = {
  name: '',
  email: '',
  password: '',
  photo: '',
};

const activeUser = getStorageItem('users')?.find(
  (user: UserDataType) => user.email === userData
);

const allUsers =
  getStorageItem('users')?.filter(
    (user: UserDataType) => user.email !== userAdmin.email
  ) || [];
allUsers.push(userAdmin);
setStorageItem('users', allUsers);

const InitialState = {
  allUsers: [...getStorageItem('users')] || [],
  user: activeUser || defaultUser,
  userId: '',
  isUserLoading: false,
  userError: '',
};

export const userReducer = produce((draft, action) => {
  const { type, payload } = action;
  switch (type) {
    case CHANGE_USER_DATA:
      draft.user = payload.userData;
      draft.allUsers = getStorageItem('users').map((user: UserDataType) =>
        user.email === payload.userData.email ? payload.userData : user
      );
      setStorageItem('users', draft.allUsers);
      return draft;
    case GET_USER_DATA:
      draft.user = getStorageItem('users').find(
        (user: UserDataType) => user.email === payload.email
      );
      return draft;
    case ADD_USER_INIT:
      draft.isUserLoading = true;
      return draft;
    case ADD_USER_SUCCESS:
      draft.allUsers = getStorageItem('users');
      draft.allUsers.push(payload.userData);
      setStorageItem('users', draft.allUsers);
      draft.userId = payload.id;
      draft.isUserLoading = false;
      return draft;
    case SET_LOGOUT:
      draft.user = defaultUser;
      return draft;
    default:
      return draft;
  }
}, InitialState);
