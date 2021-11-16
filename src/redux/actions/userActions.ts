import {
  CHANGE_USER_DATA,
  GET_USER_DATA,
  ADD_USER_INIT,
  ADD_USER_SUCCESS,
} from 'redux/actionTypes';

export type UserDataType = {
  name: string;
  email: string;
  password: string;
  photo: string;
};

export interface IActions {
  type: string;
  payload: {
    userData?: UserDataType;
    email?: string;
    id?: string;
    error?: string;
  };
}

export const changeUserData = (userData: UserDataType): IActions => ({
  type: CHANGE_USER_DATA,
  payload: { userData },
});

export const getUserData = (email: string): IActions => ({
  type: GET_USER_DATA,
  payload: { email },
});

export const addUserInit = (userData: UserDataType): IActions => ({
  type: ADD_USER_INIT,
  payload: { userData },
});

export const addUserSuccess = (id: string, userData: UserDataType): IActions => ({
  type: ADD_USER_SUCCESS,
  payload: { id, userData },
});
