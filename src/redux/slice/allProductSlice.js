import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


// Thunk to fetch all products
export const fetchAllProducts = createAsyncThunk('products/fetchAllProducts', async () => {
    const response = await fetch('https://nike-store-backend.onrender.com/api/products');
    if (!response.ok) {
        throw new Error('Failed to fetch products');
    }
    const data = await response.json();
    console.log(data)
    return data;
});

// Redux slice
const allProductSlice = createSlice({
    name: 'allProducts',
    initialState: {
        data: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchAllProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchAllProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default allProductSlice.reducer;
