import produce from 'immer';

import { SET_LOGIN, SET_LOGOUT } from 'redux/actionTypes';
import { isLoginDataRight } from 'utils/validation';
import { setIsUserAdmin, authUser, userData, isUserAdmin } from 'utils';
import { userAdmin } from 'projectConstants';

interface InitialStateType {
  isLogin: boolean;
  isAdmin: boolean;
  email: string;
  errorFromServer: string;
}
const initialState: InitialStateType = {
  isLogin: !!userData,
  isAdmin: !!isUserAdmin,
  email: userData || '',
  errorFromServer: '',
};

export const loginReducer = produce((draft, action): InitialStateType => {
  const { type, payload } = action;
  switch (type) {
    case SET_LOGIN: {
      const isLogin = isLoginDataRight(payload);
      const isAdmin = payload.email === userAdmin.email;
      if (isLogin) {
        if (isAdmin) {
          setIsUserAdmin();
          draft.isAdmin = true;
        }
        authUser(payload.email);
        draft.email = payload.email;
        draft.isLogin = true;
      } else {
        draft.errorFromServer = 'incorrect email or password';
      }
      return draft;
    }
    case SET_LOGOUT: {
      localStorage.removeItem('userData');
      localStorage.removeItem('isAdmin');
      draft.isLogin = false;
      draft.isAdmin = false;
      draft.email = '';
      return draft;
    }
    default:
      return draft;
  }
}, initialState);
