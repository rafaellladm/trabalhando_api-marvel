import React from 'react';
import { Container } from '../comics/styles';

const Header: React.FC = () => {
  return (
    <Container>
      <div>Entrega Marvel</div>
      <div className="search">
        <input type="text" />
        <button type="button">Pesquisa</button>
      </div>
    </Container>
  );
};

export default Header;
