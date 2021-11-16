import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { GlobalStyle } from 'GlobalStyle';
import { Routes } from 'routes';
import { Theme } from 'styles';
import { getProductsInit } from 'redux/actions';
import { ChatContainer, Error, UpButton, Footer } from 'components';

export const App = (): JSX.Element => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsInit());
  }, []);

  return (
    <Theme>
      <GlobalStyle />
      <Routes />
      <Error />
      <ChatContainer />
      <UpButton />
      <Footer />
    </Theme>
  );
};
