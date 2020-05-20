import React from 'react';
import { ToastContainer } from 'react-toastify';

import GlobalStyle from './styles/global';

import Main from './pages/Main';

function App() {
  return (
    <>
      <Main />
      <GlobalStyle />
      <ToastContainer autoClose={3000} />
    </>
  );
}

export default App;
