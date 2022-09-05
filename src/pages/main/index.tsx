import { useAppSelector, useAppDispatch } from '../../components/store/hooks';
import { Link } from 'react-router-dom';
import { nameArray } from '../../components/Data/nameArray';
import images from '../../components/Data/ImagesInfo';
import { addState } from '../../components/store/reducers/reducers';
import style from '../main/index.module.scss';
import GameArtistQuiz from './gameArtistQuiz/GameArtistQuiz';
import { useState } from 'react';
function Main() {
  const [state, setState] = useState(true);
  const [number, setNumber] = useState(0);
  const sumQuestions = 10;

  const array = useAppSelector((state) => state.counter.array);
  const dispatch = useAppDispatch();

  function btnClick(params: number) {
    setState((prev) => !prev);
    setNumber(params);
  }

  function CreateImg() {
    const listItems = nameArray.map((item: any, index: number) => (
      <div
        key={Math.random().toString()}
        onClick={() => {
          btnClick(index);
        }}
      >
        <div className={style.mainConent}>
          <div className={style.mainConentName}>{item.name}</div>

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
  return (
    <div className={style.main}>
      {state ? <CreateImg /> : <GameArtistQuiz dataIndex={number} setState={setState} />}
      <div>
        <button aria-label="Increment value" onClick={() => dispatch(addState(array))}>
          Increment
        </button>
        {/* <span>{count}</span> */}
        {/* <button aria-label="Decrement value" onClick={() => dispatch(decrement(1))}>
          Decrement
        </button> */}
      </div>
    </div>
  );
}

export default Main;
