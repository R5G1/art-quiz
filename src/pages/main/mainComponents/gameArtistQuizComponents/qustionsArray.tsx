import images from '../../../../components/Data/ImagesInfo';

function QustionsArray(params: number) {
  const itemQuestions = 4;
  const array: string[] = [];
  for (let i = params; i < params + itemQuestions; i++) {
    array.push(images[i].author);
  }
  return array;
}

export default QustionsArray;
