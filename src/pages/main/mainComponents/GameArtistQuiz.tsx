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
import { addStateQustions } from '../../../components/store/reducers/reducersQustions';
import arrayCopy from './arrayCopy';
import QustionsArrayCheck from './gameArtistQuizComponents/qustionsArrayCheck';
import GameQustions from './gameArtistQuizComponents/gameQustions';
import GamePictures from './gameArtistQuizComponents/gamePictures';
import { Iarray } from '../../../components/type/type';
import { addStatePictures } from '../../../components/store/reducers/reducersPictures';
import GameTitleText from './gameArtistQuizComponents/gameTitleText';
interface IGameArtistQuiz {
  dataIndex: number;
  imagesIndex: number;
  sumQuestions: number;
  setState: (value: boolean) => void | undefined;
  game: string;
  array: Iarray[];
}
function GameArtistQuiz({
  dataIndex,
  imagesIndex,
  setState,
  sumQuestions,
  game,
  array,
}: IGameArtistQuiz) {
  const dispatch = useAppDispatch();

  const [number, setNumber] = useState(imagesIndex);
  const [modalActive, setModalActive] = useState(false);
  const [btnBg, setBtnBg] = useState(false);
  const [sumNumber, setSumNumber] = useState(0);
  const [btnBgState, setBtnBgState] = useState(false);

  function Response(params: string) {
    if (params === images[number].author || params === images[number].imageNum) {
      setBtnBg(true);
      setModalActive(true);
    } else if (params != images[number].author || params != images[number].imageNum) {
      setBtnBg(false);
      setModalActive(true);
    }
  }

  function addDispatch() {
    game === 'GameQustions'
      ? dispatch(addStateQustions(arrayCopy(true, dataIndex, array, btnBg)))
      : dispatch(addStatePictures(arrayCopy(true, dataIndex, array, btnBg)));
  }

  function Questions() {
    const result = shuffle(QustionsArray(number, game));

    const listItems = result.map((item, index: number) => (
      <div key={Math.random().toString()}>
        <div className={style.mainConent}>
          {game === 'GameQustions' ? (
            <>
              <button className={style.mainConentBtn} onClick={() => Response(item)}>
                {item}
              </button>
            </>
          ) : (
            <div className={style.mainConentBgPicturesConteiner} onClick={() => Response(item)}>
              <div
                className={style.mainConentBgPictures}
                style={{
                  backgroundImage: `url(https://raw.githubusercontent.com/R5G1/image-data/master/img/${item}.jpg)`,
                }}
              ></div>
            </div>
          )}
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

        <GameTitleText num={number} gameInfo={game} />
      </div>

      <div>
        {game === 'GameQustions' ? (
          <>
            <GameQustions
              setBtnBgState={setBtnBgState}
              btnBgState={btnBgState}
              number={number}
              modalActive={modalActive}
              btnBg={btnBg}
            />
            <Questions />
          </>
        ) : (
          <>
            <Questions />
            <GamePictures number={number} modalActive={modalActive} btnBg={btnBg} />
          </>
        )}
        <Modal active={modalActive} setActive={setModalActive}>
          <>
            <div
              onClick={() => setBtnBgState(btnBgState ? false : true)}
              className={btnBgState ? style.mainConentBgFull : style.mainConentBg}
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
              <TotalResponse number={dataIndex} gameInfo={game} />
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
