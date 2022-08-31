import { ReactNode, useState } from 'react';
import { Link } from 'react-router-dom';
import images from '../../../components/Data/ImagesInfo';
import Modal from '../../../components/modal/modal';
import style from '../gameArtistQuiz/GameArtistQuiz.module.scss';
import shuffle from './gameArtistQuizComponents/shuffle';

interface IGameArtistQuiz {
  // children?: React.ReactNode;
  dataIndex: number;
  setState: (value: boolean) => void | undefined;
}
function GameArtistQuiz({ dataIndex, setState }: IGameArtistQuiz) {
  const [number, setNumber] = useState(dataIndex);
  const [modalActive, setModalActive] = useState(false);

  const itemQuestions = 4;
  const styleBg = { background: 'rgb(0, 0, 0, 0' };
  const styleBgTrue = { background: 'rgb(0, 255, 13)' };
  const styleBgfalse = { background: 'rgb(255, 0, 0)' };
  const [btnBg, setBtnBg] = useState(false);

  function state() {
    setState(true);
  }

  function array() {
    const array: string[] = [];
    for (let i = number; i < number + itemQuestions; i++) {
      array.push(images[i].author);
    }
    return array;
  }

  const result = shuffle(array());

  function rightQuestions(params: string) {
    if (params === images[number].author) {
      setBtnBg(true);
      setModalActive(true);
    } else if (params != images[number].author) {
      setBtnBg(false);
      setModalActive(true);
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
        <h4>Кто является автором этой картины?</h4>
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
        <Modal active={modalActive} setActive={setModalActive}>
          <>
            <div
              className={style.mainConentBg}
              style={{
                backgroundImage: `url(https://raw.githubusercontent.com/R5G1/image-data/master/img/${number}.jpg)`,
              }}
            >
              <div className={style.mainConentBgSensor} style={btnBg ? styleBgTrue : styleBgfalse}>
                <p>{btnBg ? '+' : '-'}</p>
              </div>
            </div>
            <h4 className={style.mainConentModalh4}>{images[number].author}</h4>
            <p className={style.mainConentModalP}>
              {images[number].name} {images[number].year} год
            </p>
            <button
              className={style.mainConentModalBtn}
              onClick={() => {
                setModalActive(false), setNumber(number + 1);
              }}
            >
              Следующий
            </button>
          </>
        </Modal>
      </div>
    </div>
  );
}

export default GameArtistQuiz;
