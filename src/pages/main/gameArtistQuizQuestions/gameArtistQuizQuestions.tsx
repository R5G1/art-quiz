import { useAppSelector } from '../../../components/store/hooks';
import style from '../mainComponents/styles/mainStyles.module.scss';
import GameArtistQuiz from '../mainComponents/GameArtistQuiz';
import { useState } from 'react';
import CreateCard from '../mainComponents/CreateCard';
import { Link } from 'react-router-dom';
function GameArtistQuizQuestions() {
  const [state, setState] = useState(true);
  const [number, setNumber] = useState(0);
  const [index, setIndex] = useState(0);
  const sumQuestions = 10;
  const arrayQuestions = useAppSelector((state) => state.counter.array);
  const gameq = 'GameQustions';
  return (
    <div className={style.main}>
      {state ? (
        <CreateCard
          array={arrayQuestions}
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
          array={arrayQuestions}
        />
      )}
    </div>
  );
}

export default GameArtistQuizQuestions;
