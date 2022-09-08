import images from '../../../../components/Data/ImagesInfo';

function QustionsArray(params: number, game: string) {
  const itemQuestions = 4;
  const array: string[] = [];
  for (let i = params; i < params + itemQuestions; i++) {
    if (game === 'GameQustions') {
      array.push(images[i].author);
    }
    if (game === 'GamePictures') {
      array.push(images[i].imageNum);
    }
  }

  return array;
}

export default QustionsArray;
