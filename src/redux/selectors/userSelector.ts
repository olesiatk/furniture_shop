import { RootState } from 'redux/reducers';
import { UserDataType } from 'redux/actions';
import { defaultPhoto } from 'projectConstants';

export const userSelector = (state: RootState): UserDataType => state.users.user;

export const isUserLoadingSelector = (state: RootState): boolean =>
  state.users.isUserLoading;

export const userPhotoSelector = (state: RootState): string =>
  state.users.user?.photo || defaultPhoto;
export const userNameSelector = (state: RootState): string => state.users.user.name;
