import { useState } from 'react';
import images from '../../../components/Data/ImagesInfo';
import Modal from '../../../components/modal/modal';
import style from '../gameArtistQuiz/GameArtistQuiz.module.scss';
import shuffle from './gameArtistQuizComponents/shuffle';
import imgTrue from '../../../components/img/gameArtistQuiz/1.svg';
import imgFalse from '../../../components/img/gameArtistQuiz/0.svg';
import ArrayCheck from './gameArtistQuizComponents/ArrayCheck';
import QustionsArray from './gameArtistQuizComponents/qustionsArray';
import TotalResponse from './gameArtistQuizComponents/totalResponse';
interface IGameArtistQuiz {
  dataIndex: number;
  setState: (value: boolean) => void | undefined;
}
function GameArtistQuiz({ dataIndex, setState }: IGameArtistQuiz) {
  const [number, setNumber] = useState(dataIndex);
  const [modalActive, setModalActive] = useState(false);
  const [btnBg, setBtnBg] = useState(false);
  const [sumNumber, setSumNumber] = useState(0);
  const totalSum = 10;
  function Response(params: string) {
    if (params === images[number].author) {
      setBtnBg(true);
      setModalActive(true);
    } else if (params != images[number].author) {
      setBtnBg(false);
      setModalActive(true);
    }
  }

  function Questions() {
    const result = shuffle(QustionsArray(number));
    const listItems = result.map((item, index: number) => (
      <div key={Math.random().toString()}>
        <div className={style.mainConent}>
          <button className={style.mainConentBtn} onClick={() => Response(item)}>
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
        <button onClick={() => setState(true)}>Назад</button>
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
        >
          <div className={style.mainConentBgItem}>
            <ArrayCheck number={number} checkState={modalActive} checkBoolean={btnBg} />
          </div>
        </div>
        <Questions />
        <Modal active={modalActive} setActive={setModalActive}>
          <>
            <div
              className={style.mainConentBg}
              style={{
                backgroundImage: `url(https://raw.githubusercontent.com/R5G1/image-data/master/img/${number}.jpg)`,
              }}
            >
              <div className={style.mainConentBgSensor}>
                <p>{btnBg ? <img src={imgTrue} alt="" /> : <img src={imgFalse} alt="" />}</p>
              </div>
            </div>
            <h4 className={style.mainConentModalh4}>{images[number].author}</h4>
            <p className={style.mainConentModalP}>
              {images[number].name} {images[number].year} год
            </p>
            <button
              className={style.mainConentModalBtn}
              onClick={() => {
                setSumNumber(sumNumber + 1), setModalActive(false), setNumber(number + 1);
              }}
            >
              Следующий
            </button>
          </>
        </Modal>
        {sumNumber === totalSum ? (
          <Modal active={true} setActive={setModalActive}>
            <>
              <TotalResponse />
              <button
                className={style.mainConentModalBtn}
                onClick={() => {
                  setState(true); // setSumNumber(sumNumber + 1), setModalActive(false);
                }}
              >
                Назад
              </button>
            </>
          </Modal>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}

export default GameArtistQuiz;
