import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: null,
    reducers: {
        setUserFromLocalStorage(state) {
            const ls = JSON.parse(window.localStorage.getItem('user'));
            return ls;
        },
    },
});

export const { setUserFromLocalStorage } = userSlice.actions;
export default userSlice.reducer;