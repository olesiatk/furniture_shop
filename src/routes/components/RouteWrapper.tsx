import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { pathConstants } from 'projectConstants';
import { Login, ProductEditing } from 'pages';
import { isLoginSelector, isUserAdminSelector } from 'redux/selectors';

const { LOGIN } = pathConstants;

interface Props {
  component: React.FC;
  exact?: boolean;
  isPrivate?: boolean;
  path: string;
}

export const RouteWrapper: React.FC<Props> = ({
  component: Component,
  isPrivate,
  exact,
  ...rest
}: Props) => {
  const isLogin = useSelector(isLoginSelector);
  const isAdmin = useSelector(isUserAdminSelector);
  if (isPrivate && !isLogin) return <Redirect to={LOGIN} />;
  if (Component === Login && isLogin) return <Redirect to="/" />;
  if (Component === ProductEditing && isLogin && !isAdmin)
    return <Redirect to="/" />;

  return <Route {...rest} component={Component} />;
};

RouteWrapper.defaultProps = {
  exact: false,
  isPrivate: false,
};
