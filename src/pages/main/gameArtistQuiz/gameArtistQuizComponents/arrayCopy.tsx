import { Iarray } from '../../../../components/type/type';

function arrayCopy(check: boolean, dataIndex: number, array: Iarray[], btnBg?: boolean) {
  const copyParse: Iarray[] = JSON.parse(JSON.stringify(array));

  copyParse.map((item, index) => {
    if (dataIndex === index && btnBg && check) {
      return (item.number += 1), (item.check = true);
    }
    if (dataIndex === index && check === false) {
      return (item.number = 0);
    }
    return item;
  });

  return copyParse;
}

export default arrayCopy;
