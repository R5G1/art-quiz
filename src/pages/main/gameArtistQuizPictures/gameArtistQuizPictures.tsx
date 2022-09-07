import { useState } from 'react';
import { useAppSelector } from '../../../components/store/hooks';
import style from '../mainComponents/styles/mainStyles.module.scss';
import GameArtistQuiz from '../mainComponents/GameArtistQuiz';
import CreateCard from '../mainComponents/CreateCard';

function GameArtistQuizPictures() {
  const [state, setState] = useState(true);
  const [number, setNumber] = useState(0);
  const [index, setIndex] = useState(0);
  const sumQuestions = 10;
  const arrayPicture = useAppSelector((state) => state.counter.array);

  return (
    <div className={style.main}>
      {state ? (
        <CreateCard
          array={arrayPicture}
          sumQuestions={sumQuestions}
          setNumber={setNumber}
          setIndex={setIndex}
          setState={setState}
        />
      ) : (
        <GameArtistQuiz
          dataIndex={index}
          imagesIndex={number}
          setState={setState}
          sumQuestions={sumQuestions}
        />
      )}
    </div>
  );
}
export default GameArtistQuizPictures;
