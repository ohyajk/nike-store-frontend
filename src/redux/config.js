import { configureStore } from '@reduxjs/toolkit'
import allProductSlice from './slice/allProductSlice'

const store = configureStore({
    reducer: {
        allProduct: allProductSlice
    }
})

export default store;