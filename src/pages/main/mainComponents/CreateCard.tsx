import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import images from '../../../components/Data/ImagesInfo';
import { useAppDispatch, useAppSelector } from '../../../components/store/hooks';
import { addStatePictures } from '../../../components/store/reducers/reducersPictures';
import { addStateQustions } from '../../../components/store/reducers/reducersQustions';
import { Iarray } from '../../../components/type/type';
import Loader from '../../../components/UI/loader/loader';
import arrayCopy from './arrayCopy';
import style from './styles/mainStyles.module.scss';

interface ICreateCard {
  array: Iarray[];
  sumQuestions: number;
  setNumber: (value: number) => void | undefined;
  setIndex: (value: number) => void | undefined;
  setState: (value: boolean) => void | undefined;
  game?: string;
}

function CreateCard({ array, sumQuestions, setNumber, setIndex, setState, game }: ICreateCard) {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    array.map((item, index) => {
      fetch(
        `url(https://raw.githubusercontent.com/R5G1/image-data/master/img/${countNumber(
          index
        )}.jpg)`
      ).then(() => {
        setLoading(false);
      });
    });
  }, []);

  function btnClick(params: number, index: number) {
    setState(false);
    setNumber(params);
    setIndex(index);
    game === 'GameQustions'
      ? dispatch(addStateQustions(arrayCopy(false, index, array)))
      : dispatch(addStatePictures(arrayCopy(false, index, array)));
  }

  function countNumber(params: number): number {
    if (game === 'GameQustions') {
      return Math.floor(params * sumQuestions);
    }
    return Math.floor(params * sumQuestions + images.length / 2);
  }

  const listItems = array.map((item: Iarray, index: number) => (
    <div
      key={Math.random().toString()}
      onClick={() => {
        btnClick(countNumber(index), index);
      }}
    >
      <div className={array[index].check ? style.mainConentS : style.mainConentM}>
        <div className={style.mainConentName}>
          <p>{item.name}</p>
          <p className={style.mainConentNameP}>
            {item.number > 0 ? `${item.number} / ${sumQuestions}` : ''}
          </p>
        </div>
        <div
          className={style.mainConentBg}
          style={{
            backgroundImage: `url(https://raw.githubusercontent.com/R5G1/image-data/master/img/${countNumber(
              index
            )}.jpg)`,
          }}
        ></div>
      </div>
    </div>
  ));
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Link to={'/main'}>
            <div className={style.linkConteiner}>назад</div>
          </Link>
          <div className={style.mainConteiner}>{listItems}</div>
        </>
      )}
    </>
  );
}

export default CreateCard;
