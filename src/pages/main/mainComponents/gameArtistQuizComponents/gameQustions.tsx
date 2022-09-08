import QustionsArrayCheck from './qustionsArrayCheck';
import style from '../styles/GameArtistQuiz.module.scss';

interface IGameQustions {
  btnBgState: boolean;
  setBtnBgState: (value: boolean) => void | undefined;
  number: number;
  modalActive: boolean;
  btnBg: boolean;
}

function GameQustions({ btnBgState, setBtnBgState, number, modalActive, btnBg }: IGameQustions) {
  return (
    <>
      <div className={style.mCBgConteiner}>
        <div
          onClick={() => setBtnBgState(btnBgState ? false : true)}
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
    </>
  );
}

export default GameQustions;
