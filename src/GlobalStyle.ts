import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  @import url('https://fonts.googleapis.com/css2?family=Courgette&family=Lato:wght@400;700&display=swap');
  html {
    box-sizing: border-box;
  }
  
  *, *:before, *:after {
    box-sizing: inherit;
  }

  html, body{
    padding: 0;
    margin: 0;
    font-family: Lato, Arial, san-serif;
  }

  body {
    font-size: 100%;
  }

  h1 {
    font-size: 3em;
    line-height: 1.5;
    margin-bottom: 1em;
  }

  h2 {
    font-size: 2em;
    line-height: 1.2;
  }

  h3 {
    font-size: 1.5em;
    line-height: 1;
  }

  h4 {
      font-size: 1.2em;
      line-height: 1.2;
      margin-bottom: 0.5em;
      font-weight: bold;
  }

  h5 {
      font-size: 1em;
      font-weight: bold;
  }

  p {
    margin: 0.5rem 0;
    font-size: 1em;
    line-height: 1.5;
  }
  ul {
    padding:0;
  }
  li {
    list-style-type: none;
  }
  a {
    text-decoration: none;
  }
`;
