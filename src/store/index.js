import { configureStore } from '@reduxjs/toolkit';
import billStore from './billStore';

const store = configureStore({
  reducer: {
    billStore,
  }
})
export default store;