import { randomUserId } from 'projectConstants';
import { RootState } from 'redux/reducers';

export const errorFromServerSelector = (state: RootState): string =>
  state.login.errorFromServer;

export const isLoginSelector = (state: RootState): boolean => state.login.isLogin;

export const isUserAdminSelector = (state: RootState): boolean =>
  state.login.isAdmin;

export const userEmailSelector = (state: RootState): string =>
  state.login.email ? state.login.email : randomUserId;
