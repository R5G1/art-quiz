import { useState } from 'react';
import images from '../../../../components/Data/ImagesInfo';

interface IGameTitleText {
  num: number;
  gameInfo: string;
}

function GameTitleText({ num, gameInfo }: IGameTitleText) {
  const [state, setState] = useState(false);
  function clouse() {
    setState((prev) => !prev);
    setTimeout(() => {
      setState(false);
    }, 1500);
  }
  return (
    <>
      {gameInfo === 'GameQustions' ? (
        <>
          <h4>Кто является автором этой картины?</h4>
          <p>
            {images[num].name} {images[num].year} год
          </p>
        </>
      ) : (
        <>
          <h4>Какую картину изобразил {images[num].author}?</h4>
          <p onClick={() => clouse()} style={{ cursor: 'pointer' }}>
            {state ? (
              <>
                {images[num].name} {images[num].year} год
              </>
            ) : (
              '######## #####'
            )}
          </p>
        </>
      )}
    </>
  );
}

export default GameTitleText;
