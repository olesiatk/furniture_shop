import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { LoginForm } from './LoginForm';
import { getUserData, setLogin, getUserOrders } from 'redux/actions';
import { errorFromServerSelector } from 'redux/selectors';

export const LoginFormContainer = (): JSX.Element => {
  const errorFromServer = useSelector(errorFromServerSelector);
  const dispatch = useDispatch();
  const login = (email: string, password: string) => {
    dispatch(setLogin(email, password));
    dispatch(getUserData(email));
    dispatch(getUserOrders(email));
  };
  return <LoginForm login={login} errorFromServer={errorFromServer} />;
};
