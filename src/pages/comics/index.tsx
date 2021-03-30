import React, { useCallback, useEffect, useState } from 'react';
import api from '../../services/api';

import { Container, CardList, Card, ButtonMore } from './styles';

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
      .get('/comics')
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
      <ButtonMore onClick={handleMore}>Mais</ButtonMore>
    </Container>
  );
};

export default Comics;
