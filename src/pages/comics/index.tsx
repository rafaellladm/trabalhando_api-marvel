import React, { useCallback, useEffect, useState } from 'react';
import api from '../../services/api';

import { Header, Container, CardList, Card, ButtonMore } from './styles';

interface ResponseData {
  id: string;
  title: string;
  thumbnail: {
    extension: string;
    path: string;
  };
  description: string;
}

const Comics: React.FC = () => {
  const [comics, setCharacters] = useState<ResponseData[]>([]);
  useEffect(() => {
    api
      .get('/comics/{}')
      .then(response => {
        setCharacters(response.data.data.results);
      })
      .catch(err => console.log(err));
  }, []);

  const handleMore = useCallback(async () => {
    try {
      const offset = comics.length;
      const response = await api.get('/comics', {
        params: {
          offset,
        },
      });

      setCharacters([...comics, ...response.data.data.results]);
    } catch (err) {
      console.log(err);
    }
  }, [comics]);

  return (
    <Container>
      <Header>
        <div>
          <img
            src="https://ik.imagekit.io/rafaelluz/Marvel_Comics-logo-D489AEB9C1-seeklogo.com_fCfZMPpyX3.png"
            alt=""
          />
        </div>
        <div className="search">
          <input type="text" />
          <button type="button">Pesquisa</button>
        </div>
      </Header>
      <CardList>
        {comics.map(comic => {
          return (
            <Card key={comic.id} thumbnail={comic.thumbnail}>
              <div id="img" />
              <div className="button">
                <button type="button">Selecionar</button>
                <button type="button">Detalhes</button>
              </div>
            </Card>
          );
        })}
      </CardList>
      <ButtonMore onClick={handleMore}>
        <h3>Mais</h3>
      </ButtonMore>
    </Container>
  );
};

export default Comics;
