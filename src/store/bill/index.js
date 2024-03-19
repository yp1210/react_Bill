import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const billStore = createSlice({
    name: 'bill',
    initialState: {
        billList: [],
    },
    reducers: {
        getBillList: (state, action) => {
            state.billList = action.payload
        }
    }
})

const { getBillList } = billStore.actions;

// 获取账单
const asyncGetBillList = () => {
    return async (dispatch) => {
    const res = await axios.get('http://localhost:8888/ka');
    dispatch(getBillList(res.data))
    }
}

export default billStore.reducer;
export { asyncGetBillList };