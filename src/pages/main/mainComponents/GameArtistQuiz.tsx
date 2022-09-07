import { useEffect, useState } from 'react';
import images from '../../../components/Data/ImagesInfo';
import Modal from '../../../components/modal/modal';
import style from './styles/GameArtistQuiz.module.scss';
import shuffle from './shuffle';
import imgTrue from '../../../components/img/gameArtistQuiz/1.svg';
import imgFalse from '../../../components/img/gameArtistQuiz/0.svg';
import QustionsArray from './gameArtistQuizComponents/qustionsArray';
import TotalResponse from './gameArtistQuizComponents/totalResponse';
import { useAppDispatch, useAppSelector } from '../../../components/store/hooks';
import { addState } from '../../../components/store/reducers/reducers';
import arrayCopy from './arrayCopy';
import QustionsArrayCheck from './gameArtistQuizComponents/qustionsArrayCheck';
interface IGameArtistQuiz {
  dataIndex: number;
  imagesIndex: number;
  sumQuestions: number;
  setState: (value: boolean) => void | undefined;
}
function GameArtistQuiz({ dataIndex, imagesIndex, setState, sumQuestions }: IGameArtistQuiz) {
  const array = useAppSelector((state) => state.counter.array);
  const dispatch = useAppDispatch();

  const [number, setNumber] = useState(imagesIndex);
  const [modalActive, setModalActive] = useState(false);
  const [btnBg, setBtnBg] = useState(false);
  const [sumNumber, setSumNumber] = useState(0);
  const [btnBgState, setBtnBgState] = useState(false);

  function Response(params: string) {
    if (params === images[number].author) {
      setBtnBg(true);
      setModalActive(true);
    } else if (params != images[number].author) {
      setBtnBg(false);
      setModalActive(true);
    }
  }

  function addDispatch() {
    dispatch(addState(arrayCopy(true, dataIndex, array, btnBg)));
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
        <button className={style.mainTitleBtn} onClick={() => setState(true)}>
          Назад
        </button>
        <h4>Кто является автором этой картины?</h4>
        <p>
          {images[number].name} {images[number].year} год
        </p>
      </div>

      <div>
        <div className={style.mCBgConteiner}>
          <div
            onClick={() => setBtnBgState((prev) => !prev)}
            className={btnBgState ? style.mainConentBgFull : style.mainConentBg}
            style={{
              backgroundImage: `url(https://raw.githubusercontent.com/R5G1/image-data/master/img/${number}.jpg)`,
            }}
          >
            <div className={style.mainConentBgItem}>
              <QustionsArrayCheck number={number} checkState={modalActive} checkBoolean={btnBg} />
            </div>
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
                setSumNumber(sumNumber + 1),
                  setModalActive(false),
                  setNumber(number + 1),
                  addDispatch();
              }}
            >
              Следующий
            </button>
          </>
        </Modal>
        {sumNumber === sumQuestions ? (
          <Modal active={true} setActive={setModalActive}>
            <>
              <TotalResponse number={dataIndex} />
              <button
                className={style.mainConentModalBtn}
                onClick={() => {
                  setState(true);
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
