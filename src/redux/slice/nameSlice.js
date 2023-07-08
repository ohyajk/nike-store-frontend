import { createSlice } from '@reduxjs/toolkit';

const nameSlice = createSlice({
    name: 'name',
    initialState: {
        name: undefined
    },
    reducers: {
        loadName: (state, action) => {
            state.name = action.payload;
        }
    }
});

export const { loadName } = nameSlice.actions;
export default nameSlice.reducer;
