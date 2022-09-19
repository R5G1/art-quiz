import { Iimages } from '../../../components/type/type';

function arrayCopy(check: boolean, dataIndex: number, array: Iimages[], btnBg?: boolean) {
  const copyParse: Iimages[] = JSON.parse(JSON.stringify(array));

  copyParse.map((item, index) => {
    if (dataIndex === index && btnBg && check) {
      return (item.check = true);
    }
  });

  return copyParse;
}

export default arrayCopy;
