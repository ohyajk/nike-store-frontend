import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {
            const { id, image, price, size, qty } = action.payload;
            const newItem = {
                id,
                image,
                price,
                size,
                qty,
            };
            state.items.push(newItem);
            window.localStorage.setItem('cart', JSON.stringify(state.items));
        },
        removeItem: (state, action) => {
            const itemId = action.payload;
            state.items = state.items.filter((item) => item.id !== itemId);
            window.localStorage.setItem('cart', JSON.stringify(state.items));
        },
        loadCartFromStorage: (state) => {
            const cartData = window.localStorage.getItem('cart');
            if (cartData) {
                state.items = JSON.parse(cartData);
            }
        },
    },
});

export const {
    addItem,
    removeItem,
    loadCartFromStorage,
} = cartSlice.actions;

export default cartSlice.reducer;
