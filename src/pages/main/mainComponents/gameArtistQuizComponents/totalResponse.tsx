import { useState } from 'react';
import imgResult from '../../../../components/img/gameArtistQuiz/2.svg';
import imgResultFull from '../../../../components/img/gameArtistQuiz/3.svg';
import imgResultNull from '../../../../components/img/gameArtistQuiz/4.svg';
import { useAppSelector } from '../../../../components/store/hooks';
import styles from './styles/totalResponse.module.scss';

interface ITotalResponse {
  number: number;
  gameInfo: string;
}

function TotalResponse({ number, gameInfo }: ITotalResponse) {
  const arrayQ = useAppSelector((state) => state.counter.array);
  const arrayP = useAppSelector((state) => state.counterP.array);
  function totalResponseCheck() {
    const num = gameInfo === 'GameQustions' ? arrayQ[number].number : arrayP[number].number;
    if (num === 10) {
      return (
        <>
          <img className={styles.totalResponseImg} src={imgResultFull} alt="" />
          <img className={styles.totalResponseImg} src={imgResult} alt="" />
          <p className={styles.totalResponseP}>Итого {num} / 10</p>
        </>
      );
    }
    if (num > 0 && num < 10) {
      return (
        <>
          <img className={styles.totalResponseImg} src={imgResult} alt="" />
          <p className={styles.totalResponseP}>Итого {num} / 10</p>
        </>
      );
    }
    if (num === 0) {
      return (
        <>
          <img className={styles.totalResponseImg} src={imgResultNull} alt="" />
          <p className={styles.totalResponseP}>Итого {num} / 10</p>
        </>
      );
    }
  }
  return <>{totalResponseCheck()}</>;
}

export default TotalResponse;
