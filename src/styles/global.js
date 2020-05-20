import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  .toast-success {
    background: #4BC18D;
    padding-left: 10px;
    font-size: 15px;
  }

  .toast-error {
    background: #D02828;
    padding-left: 10px;
    font-size: 15px;
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
    height: 100%;
    background: linear-gradient(-90deg, #6598C9, #085BA9);
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    color: #222;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
