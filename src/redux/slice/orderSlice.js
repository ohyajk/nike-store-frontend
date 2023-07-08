import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    total: 0,
    address: '',
    items: [],
};

const orderSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
        updateTotal: (state, action) => {
            state.total = action.payload;
        },
        updateAddress: (state, action) => {
            state.address = action.payload;
        },
        updateItems: (state, action) => {
            state.items = action.payload;
        },
    },
});

export const { updateTotal, updateAddress, updateItems } = orderSlice.actions;

export default orderSlice.reducer;
