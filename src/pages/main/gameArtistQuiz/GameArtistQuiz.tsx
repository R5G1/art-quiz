import { ReactNode, useState } from 'react';
import { Link } from 'react-router-dom';
import images from '../../../components/Data/ImagesInfo';
import style from '../gameArtistQuiz/GameArtistQuiz.module.scss';

interface IGameArtistQuiz {
  children?: React.ReactNode;
  dataIndex: number;
  setState: any;
}
function GameArtistQuiz({ children, dataIndex, setState }: IGameArtistQuiz) {
  const [number, setNumber] = useState(dataIndex);
  const itemQuestions = 4;

  function state() {
    setState((prev: boolean) => !prev);
  }

  function array() {
    const array: string[] = [];
    for (let i = number; i < number + itemQuestions; i++) {
      array.push(images[i].author);
    }
    return array;
  }

  function shuffle(array: string[]) {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  const result = shuffle(array());

  function rightQuestions(params: string) {
    if (params === images[number].author) {
      setNumber(number + 1);
      console.log('true', number);
    }
  }

  function Questions() {
    const listItems = result.map((item, index: number) => (
      <div key={Math.random().toString()}>
        <div className={style.mainConent}>
          <button className={style.mainConentBtn} onClick={() => rightQuestions(item)}>
            {item}
          </button>
        </div>
      </div>
    ));
    return <div className={style.mainConteiner}>{listItems}</div>;
  }

  return (
    <div className={style.main}>
      <div className={style.mainTitle}>
        <button onClick={state}>Назад</button>
        <p>Кто является автором этой картины?</p>
        <p>
          {images[number].name} {images[number].year} год
        </p>
      </div>

      <div>
        <div
          className={style.mainConentBg}
          style={{
            backgroundImage: `url(https://raw.githubusercontent.com/R5G1/image-data/master/img/${number}.jpg)`,
          }}
        ></div>
        <Questions />
        <div></div>
      </div>
    </div>
  );
}

export default GameArtistQuiz;
