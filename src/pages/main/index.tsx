import { Link } from 'react-router-dom';
import { nameDate } from '../../components/Data/DataMain';
import images from '../../components/Data/ImagesInfo';
import style from '../main/index.module.scss';
function Main() {
  function randomInteger(min: number, max: number) {
    const rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }

  function btnClick(name: string) {
    console.log(name);
  }

  function CreateImg() {
    const itemLenth = nameDate.length;
    const listItems = nameDate.map((item, index: number) => (
      <Link to={'/ArtistQuiz'} key={Math.random().toString()}>
        <div className={style.mainConent} onClick={() => btnClick(item.name)}>
          <div className={style.mainConentName}>{item.name}</div>
          <div
            className={style.mainConentBg}
            style={{
              backgroundImage: `url(https://raw.githubusercontent.com/R5G1/image-data/master/img/${
                index + itemLenth
              }.jpg)`,
            }}
          ></div>
        </div>
      </Link>
    ));
    return <div className={style.mainConteiner}>{listItems}</div>;
  }
  return (
    <div className={style.main}>
      <CreateImg />
    </div>
  );
}

export default Main;
