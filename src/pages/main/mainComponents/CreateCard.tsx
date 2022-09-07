import images from '../../../components/Data/ImagesInfo';
import { useAppDispatch } from '../../../components/store/hooks';
import { addState } from '../../../components/store/reducers/reducers';
import { Iarray } from '../../../components/type/type';
import arrayCopy from './arrayCopy';
import style from './styles/mainStyles.module.scss';

interface ICreateCard {
  array: Iarray[];
  sumQuestions: number;
  setNumber: (value: number) => void | undefined;
  setIndex: (value: number) => void | undefined;
  setState: (value: boolean) => void | undefined;
}

function CreateCard({ array, sumQuestions, setNumber, setIndex, setState }: ICreateCard) {
  const dispatch = useAppDispatch();

  function btnClick(params: number, index: number) {
    setState(false);
    setNumber(params);
    setIndex(index);
    dispatch(addState(arrayCopy(false, params, array)));
  }

  function countNumber(params: number) {
    return Math.floor(params * sumQuestions + images.length / 2);
  }

  const listItems = array.map((item: Iarray, index: number) => (
    <div
      key={Math.random().toString()}
      onClick={() => {
        btnClick(countNumber(index), index);
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
  return <div className={style.mainConteiner}>{listItems}</div>;
}

export default CreateCard;
