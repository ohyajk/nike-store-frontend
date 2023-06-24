import { configureStore } from '@reduxjs/toolkit'
import allProductSlice from './slice/allProductSlice'
import userSlice from './slice/userSlice';

const store = configureStore({
    reducer: {
        allProduct: allProductSlice,
        user: userSlice,
    }
})

export default store;