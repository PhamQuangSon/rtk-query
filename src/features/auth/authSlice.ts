import { createSelector, createSlice } from "@reduxjs/toolkit"

const initialState = {
    token: null,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
            localStorage.setItem('token', action.payload);
        },
        removeToken: (state) => {
            state.token = null;
            localStorage.removeItem('token');
        }
    }
});

const selector = (state: any) => state['auth'];

export const selectToken = createSelector(
    selector,
    (state) => state.token,
)

export const { setToken } = authSlice.actions;

export default authSlice.reducer;