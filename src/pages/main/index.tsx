import { Link } from 'react-router-dom';
import style from './index.module.scss';

function Main() {
  function countNumber(params: number) {
    return Math.floor(Math.random() * params);
  }

  return (
    <div className={style.main}>
      <div className={style.mainConteiner}>
        <Link to={'/gameArtistQuizQuestions'}>
          <div
            className={style.gameConteiner}
            style={{
              backgroundImage: `url(https://raw.githubusercontent.com/R5G1/image-data/master/img/${70}.jpg)`,
            }}
          >
            <p>GameQustions</p>
          </div>
        </Link>
        <Link to={'/gameArtistQuizPictures'}>
          <div
            className={style.gameConteiner}
            style={{
              backgroundImage: `url(https://raw.githubusercontent.com/R5G1/image-data/master/img/${230}.jpg)`,
            }}
          >
            <p>GamePictures</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Main;
