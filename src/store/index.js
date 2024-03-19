import { configureStore } from '@reduxjs/toolkit';
import bill from '@/store/bill';

export default configureStore({
    reducer: {
        bill
    }
})