import { Link } from 'react-router-dom';
import style from '../index.module.scss';
function GameArtistQuiz() {
  return (
    <div className={style.main}>
      <Link to={'/main'}>home</Link>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni aperiam quasi eaque enim
        reprehenderit explicabo ipsam est blanditiis! Repudiandae, dolorum recusandae! Et, molestias
        minima non similique natus perspiciatis enim ullam.
      </p>
    </div>
  );
}

export default GameArtistQuiz;
