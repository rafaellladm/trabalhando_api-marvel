import styled from 'styled-components';

interface ThumbnailData {
  thumbnail: {
    path: string;
    extension: string;
  };
}

export const Container = styled.main`
  display: flex;
  flex-wrap: wrap;
  background: #293241;

  width: 100%;
  height: 100%;
`;
export const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const urlImg = (props: ThumbnailData) =>
  `${props.thumbnail.path}.${props.thumbnail.extension}`;

export const Card = styled.div`
  background: #242d3a;
  height: 325px;
  width: 200px;
  margin: 10px;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 2px 2px 10px 1px rgba(255, 0, 0, 0.3);
  text-align: center;

  .button {
    box-sizing: border-box;
    position: relative;
    display: flex;
    align-items: center;
  }

  button {
    width: 130px;
    border-radius: 5px;
    padding: 3px;
    font-weight: 700;
    font-size: 18px;
    color: #ffffff;
    background: #0077b6;
    flex: 1;
  }

  button + button {
    margin-left: 8px;
  }

  div#img {
    height: 100%;

    background: url(${urlImg}) no-repeat center;
    background-size: 100% 100%;
    transition: all 0.5s;
  }

  &:hover {
    div#img {
      height: 80%;
    }

    .button {
      height: 20%;
    }

    button {
      cursor: pointer;
    }
  }
`;

export const ButtonMore = styled.div`
  background-color: #ffffff;
  height: 30px;
  width: 20%;

  cursor: pointer;
  box-shadow: 2px 2px 10px 1px rgba(255, 0, 0, 0.3);
  margin: 10px auto;
  text-align: center;
  padding: 4px;
`;
