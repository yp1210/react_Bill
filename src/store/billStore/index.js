import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const store = createSlice({
  name: 'bill',
  initialState: {
    billList: []
  },
  reducers: {
    setBillList: (state, action) => {
      state.billList = action.payload;
    },
  }
})

const { setBillList } = store.actions;

const getBillList = () => {
  return (dispatch) => {
    axios.get('http://localhost:8888/ka').then(res => {
      dispatch(setBillList(res.data))
    })
  }
}

export { setBillList, getBillList };
export default store.reducer;