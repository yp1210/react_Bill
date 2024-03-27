import { billListData } from '@/constants/type'

const getEnum = (type, useFor) => {
  let name = ''
  const typeList = billListData[type];

  if (!typeList?.length) return name;

  const getName = (targetList) => {
    for (const iterator of targetList) {
      const { type: itemType, name: itemName, list } = iterator || {};
      if (itemType === useFor) {
        name = itemName;
        return;
      }
      if (list?.length) {
        getName(list);
      }
    }
  }
  getName(typeList);
  return name
}

export {
  getEnum
}