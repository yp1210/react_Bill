import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import dayjs from 'dayjs';
import { jsonDateToObj } from '@/utils/time';

const billStore = createSlice({
  name: 'bill',
  initialState: {
    billList: [],
    selectMonth: dayjs().toJSON(),
    currentMonthBill: [],
  },
  reducers: {
    getBillList: (state, action) => {
      state.billList = action.payload
    },
    setSelectMonth: (state, action) => {
      const { value, type }  = action.payload || {};
      state.selectMonth = value;
      // 当前选中的月份数据
      const currentMonthBill = state.billList.filter(items => jsonDateToObj(items?.date)?.isSame(jsonDateToObj(value), type));
      state.currentMonthBill = currentMonthBill;
    },
    addBillList: (state, action) => {
      state.billList.push(action.payload);
    },
  }
})

const { getBillList, setSelectMonth, addBillList } = billStore.actions;

// 获取账单
const asyncGetBillList = () => {
  return async (dispatch) => {
    const res = await axios.get('http://localhost:8889/ka');
    const billList = res.data || [];
    billList.forEach(element => {
      element.date = dayjs(element?.date).toJSON()
    });
    dispatch(getBillList(res.data))
  }
}

// 记一笔
const saveBill = (date) => {
  return async (dispatch) => {
    const res = await axios.post('http://localhost:8889/ka', date)
    const { status, data } = res || {};
    dispatch(addBillList(data))
  }
}

export default billStore.reducer;
export { asyncGetBillList, setSelectMonth, saveBill };