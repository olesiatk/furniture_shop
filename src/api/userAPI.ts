import { postData } from './axiosClient';
import { usersUrl } from 'projectConstants';
import { UserDataType } from 'redux/actions';

export const addUser = (user: UserDataType) =>
  postData({ url: usersUrl, data: user });
