import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import dayjs from 'dayjs';

const billStore = createSlice({
  name: 'bill',
  initialState: {
    billList: [],
    selectMonth: dayjs().toJSON()
  },
  reducers: {
    getBillList: (state, action) => {
      state.billList = action.payload
    },
    setSelectMonth: (state, action) => {
      state.selectMonth = action.payload;
    }
  }
})

const { getBillList, setSelectMonth } = billStore.actions;

// 获取账单
const asyncGetBillList = () => {
  return async (dispatch) => {
    const res = await axios.get('http://localhost:8889/ka');
    dispatch(getBillList(res.data))
  }
}

export default billStore.reducer;
export { asyncGetBillList, setSelectMonth };