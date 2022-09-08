import QustionsArrayCheck from './qustionsArrayCheck';
import style from '../styles/GameArtistQuiz.module.scss';

interface IgamePictures {
  number: number;
  modalActive: boolean;
  btnBg: boolean;
}

function GamePictures({ number, modalActive, btnBg }: IgamePictures) {
  return (
    <>
      <div className={style.mCBgConteiner}>
        <div className={style.mainConentBgItem}>
          <QustionsArrayCheck number={number} checkState={modalActive} checkBoolean={btnBg} />
        </div>
      </div>
    </>
  );
}

export default GamePictures;
