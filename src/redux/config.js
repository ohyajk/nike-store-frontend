import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './slice/cartSlice';
import nameSlice from './slice/nameSlice';
import orderSlice from './slice/orderSlice';

const store = configureStore({
    reducer: {
        cart: cartSlice,
        name: nameSlice,
        order: orderSlice,
    },
});

export default store;