import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';

export const mainTheme: DefaultTheme = {
  primaryColor: '#af9a7d',
  secondPrimaryColor: '#735c3c',
  lightBrown: '#e6dbcc',
  mainWhite: '#fff',
  mainBlack: '#222',
  mainGrey: '#ececec',
  lightGrey: '#f7f7f7',
  errorColor: '#f77',
  darkGrey: '#aaa',
  shadow: {
    light: 'box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.75)',
    dark: 'box-shadow: 6px 6px 10px 0px rgba(0,0,0,0.75)',
    darkest: 'box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75)',
  },
  setTransition: ({
    property = 'all',
    time = '0.3s',
    timing = 'ease-in-out',
  } = {}) => `transition: ${property} ${time} ${timing};`,
  setBorder: ({ width = '2px', style = 'solid', color = 'black' } = {}) =>
    `border: ${width} ${style} ${color};`,
};

export const Theme: React.FC = ({ children }) => (
  <ThemeProvider theme={mainTheme}>{children}</ThemeProvider>
);
