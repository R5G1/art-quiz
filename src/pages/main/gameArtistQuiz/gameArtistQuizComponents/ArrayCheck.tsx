import { useEffect, useState } from 'react';
import styles from './styles/arrayCount.module.scss';
interface IArrayCheck {
  number: number;
  checkState?: boolean;
  checkBoolean: boolean;
}
function ArrayCheck({ number, checkState, checkBoolean }: IArrayCheck) {
  const [state, setState] = useState(number);

  const array = () => {
    const array: number[] = [];
    for (let i = 0; i <= 10; i++) {
      array.push(i);
    }
    return array;
  };

  const [stateArray, setStateArray] = useState<(number | boolean)[]>(array());

  useEffect(() => {
    if (checkState) {
      setStateArray(
        stateArray.map((item, index) => {
          if (number === index) return checkBoolean;
          return item;
        })
      );
    }
  }, [checkState]);

  function check(params: number | boolean) {
    const styleBg = { background: 'rgb(0, 0, 0,  0.8)' };
    const styleBgTrue = { background: 'rgb(0, 255, 13)' };
    const styleBgfalse = { background: 'rgb(255, 0, 0)' };

    if (params === true) return styleBgTrue;
    if (params === false) return styleBgfalse;
    else styleBg;
  }
  console.log(checkState);

  function result() {
    return stateArray.map((item, index) => (
      <div className={styles.content} key={Math.random().toString()}>
        <div className={styles.contentItem} style={check(item)}></div>
      </div>
    ));
  }

  return (
    <div>
      <div className={styles.conteiner}>{result()}</div>
    </div>
  );
}

export default ArrayCheck;
