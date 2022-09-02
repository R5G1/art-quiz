import { useState } from 'react';
import imgResult from '../../../../components/img/gameArtistQuiz/2.svg';
import imgResultFull from '../../../../components/img/gameArtistQuiz/3.svg';
import imgResultNull from '../../../../components/img/gameArtistQuiz/4.svg';
import styles from './styles/totalResponse.module.scss';

interface ITotalResponse {
  checkBoolean?: boolean;
}

function TotalResponse({ checkBoolean }: ITotalResponse) {
  const [sumNumber, setSumNumber] = useState(0);
  if (checkBoolean) {
    setSumNumber(sumNumber + 1);
  }
  return (
    <>
      <img className={styles.totalResponseImg} src={imgResultFull} alt="" />
      <img className={styles.totalResponseImg} src={imgResult} alt="" />
      <img className={styles.totalResponseImg} src={imgResultNull} alt="" />
      <p className={styles.totalResponseP}>Итого {sumNumber} / 10</p>
    </>
  );
}

export default TotalResponse;
