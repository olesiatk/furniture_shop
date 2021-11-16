import { SET_LOGIN, SET_LOGOUT } from 'redux/actionTypes';

type SetLoginType = {
  type: typeof SET_LOGIN;
  payload: { email: string; password: string };
};
export const setLogin = (email: string, password: string): SetLoginType => ({
  type: SET_LOGIN,
  payload: { email, password },
});

type SetLogoutType = {
  type: typeof SET_LOGOUT;
};
export const setLogout = (): SetLogoutType => ({
  type: SET_LOGOUT,
});
