import { useState } from 'react';
import imgResult from '../../../../components/img/gameArtistQuiz/2.svg';
import imgResultFull from '../../../../components/img/gameArtistQuiz/3.svg';
import imgResultNull from '../../../../components/img/gameArtistQuiz/4.svg';
import { useAppSelector } from '../../../../components/store/hooks';
import styles from './styles/totalResponse.module.scss';

interface ITotalResponse {
  number: number;
}

function TotalResponse({ number }: ITotalResponse) {
  const array = useAppSelector((state) => state.counter.array);
  function totalResponseCheck() {
    const num = array[number].number;
    if (num === 10) {
      return (
        <>
          <img className={styles.totalResponseImg} src={imgResultFull} alt="" />
          <img className={styles.totalResponseImg} src={imgResult} alt="" />
          <p className={styles.totalResponseP}>Итого {array[number].number} / 10</p>
        </>
      );
    }
    if (num > 0 && num < 10) {
      return (
        <>
          <img className={styles.totalResponseImg} src={imgResult} alt="" />
          <p className={styles.totalResponseP}>Итого {array[number].number} / 10</p>
        </>
      );
    }
    if (num === 0) {
      return (
        <>
          <img className={styles.totalResponseImg} src={imgResultNull} alt="" />
          <p className={styles.totalResponseP}>Итого {array[number].number} / 10</p>
        </>
      );
    }
  }
  return <>{totalResponseCheck()}</>;
}

export default TotalResponse;
