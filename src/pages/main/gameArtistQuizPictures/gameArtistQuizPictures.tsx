import { useState } from 'react';
import { useAppSelector } from '../../../components/store/hooks';
import style from '../mainComponents/styles/mainStyles.module.scss';
import GameArtistQuiz from '../mainComponents/GameArtistQuiz';
import CreateCard from '../mainComponents/CreateCard';
import { Link } from 'react-router-dom';

function GameArtistQuizPictures() {
  const [state, setState] = useState(true);
  const [number, setNumber] = useState(0);
  const [index, setIndex] = useState(0);
  const sumQuestions = 10;
  const arrayPicture = useAppSelector((state) => state.counterP.array);
  const gameq = 'GamePictures';

  return (
    <div className={style.main}>
      {state ? (
        <CreateCard
          array={arrayPicture}
          sumQuestions={sumQuestions}
          setNumber={setNumber}
          setIndex={setIndex}
          setState={setState}
          game={gameq}
        />
      ) : (
        <GameArtistQuiz
          dataIndex={index}
          imagesIndex={number}
          setState={setState}
          sumQuestions={sumQuestions}
          game={gameq}
          array={arrayPicture}
        />
      )}
    </div>
  );
}
export default GameArtistQuizPictures;
