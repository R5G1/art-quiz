import { useAppSelector, useAppDispatch } from '../../components/store/hooks';
import { addState } from '../../components/store/reducers/reducers';
import style from '../main/index.module.scss';
import GameArtistQuiz from './gameArtistQuiz/GameArtistQuiz';
import { useEffect, useState } from 'react';
import { Iarray } from '../../components/type/type';
import arrayCopy from './gameArtistQuiz/gameArtistQuizComponents/arrayCopy';
function Main() {
  const [state, setState] = useState(true);
  const [number, setNumber] = useState(0);

  const array = useAppSelector((state) => state.counter.array);
  const dispatch = useAppDispatch();

  function btnClick(params: number) {
    setState((prev) => !prev);
    setNumber(params);
    dispatch(addState(arrayCopy(false, params, array)));
  }

  function CreateCard() {
    const sumQuestions = 10;
    const listItems = array.map((item: Iarray, index: number) => (
      <div
        key={Math.random().toString()}
        onClick={() => {
          btnClick(index);
        }}
      >
        <div
          className={style.mainConent}
          style={
            array[index].check
              ? { background: 'var(--main-color-o)' }
              : { background: 'var(--bg-color-o1)' }
          }
        >
          <div className={style.mainConentName}>
            <p>{item.name}</p>{' '}
            <p className={style.mainConentNameP}>{item.number > 0 ? `${item.number} / 10` : ''}</p>
          </div>

          <div
            className={style.mainConentBg}
            style={{
              backgroundImage: `url(https://raw.githubusercontent.com/R5G1/image-data/master/img/${
                index * sumQuestions
              }.jpg)`,
            }}
          ></div>
        </div>
      </div>
    ));
    return <div className={style.mainConteiner}>{listItems}</div>;
  }

  useEffect(() => {
    CreateCard();
  }, [dispatch]);

  return (
    <div className={style.main}>
      {state ? <CreateCard /> : <GameArtistQuiz dataIndex={number} setState={setState} />}
    </div>
  );
}

export default Main;
