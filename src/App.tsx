import React from 'react';

import Comics from './pages/comics';

import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <Comics />
      <GlobalStyle />
    </>
  );
};

export default App;
