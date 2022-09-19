import { useState } from 'react';
import { useAppSelector } from '../../components/store/hooks';
import style from '../statistics/index.module.scss';

function Statistics() {
  const storageState = JSON.parse(sessionStorage.getItem('state') || '10');
  const arrayImages = useAppSelector((state) => state.arrayImages.array);
  const [state, setState] = useState(storageState);

  sessionStorage.setItem('state', JSON.stringify(state));

  function showImg() {
    const result = arrayImages.map((item, index) => (
      <div key={item.imageNum}>
        {Number(item.imageNum) <= state ? (
          <div className={style.statisticsImgConteiner}>
            <img
              className={item.check ? style.statisticsImg : style.statisticsImgM}
              src={`https://raw.githubusercontent.com/R5G1/image-data/master/img/${item.imageNum}.jpg`}
              alt=""
            />
            <div className={style.statisticsImgP}>
              <p>{item.author}</p>
              <p>{item.name}</p>
              <p>{item.year}</p>
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
    ));

    return <div className={style.statisticsContent}>{result}</div>;
  }

  return (
    <div className={style.statistics}>
      {showImg()}
      <button onClick={() => setState(state + 10)}>больше</button>
    </div>
  );
}

export default Statistics;
