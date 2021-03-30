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

export const Header = styled.div`
  background-color: #b80300;
  width: 100%;
  height: 60px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;

  div {
    display: flex;
    justify-content: center;
  }

  div img {
    height: 50px;
  }

  button {
    margin-left: 20px;
    border-radius: 8px;
    padding: 2px 6px;
    background-color: #0077b6;
    font-weight: 700;
    font-size: 15px;
  }
`;

export const ButtonMore = styled.div`
  background-color: #b84000;
  height: 30px;
  width: 15%;
  display: flex;
  justify-content: center;

  cursor: pointer;
  box-shadow: 2px 2px 10px 1px rgba(255, 0, 0, 0.3);
  margin: 10px auto;
  text-align: center;
  /* padding: 4px; */
  font-weight: 700;
  font-size: 18px;
  color: #2c23a3;
`;
