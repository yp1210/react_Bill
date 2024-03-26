import dayjs from 'dayjs';

const jsonDateToObj = (jsonDate) => {
  if(!jsonDate || typeof jsonDate !== 'string') {
    return dayjs();
  }
  return dayjs(jsonDate);
}

export {
  jsonDateToObj
}