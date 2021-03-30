import React from 'react';

import Header from './pages/header';
import Comics from './pages/comics';

import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Comics />
      <GlobalStyle />
    </>
  );
};

export default App;
