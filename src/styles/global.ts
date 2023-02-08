import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html, body {
    max-height: 100vh;
    background: #E7E7E7;
    color: #141414;
    -webkit-font-smoothing: antialiased;
  }

  body, button, input {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 500;
    color: #141414;
  }

  h1,h2,h3,h4,h5,h6,strong {
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
  }

  button {
    cursor: pointer;
    background: none;
    border: none;
  }
`;
