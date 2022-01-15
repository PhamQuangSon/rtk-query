import { createSelector, createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../app/store";

const initialState = {
    user: null,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
            localStorage.setItem('user', action.payload);
        },
        removeUser: (state) => {
            state.user = null;
            localStorage.removeItem('user');
        }
    }
});

const selector = (state: RootState) => state.user;

export const selectUser = createSelector(
    selector,
    (state) => state.user,
)

export const { setUser } = userSlice.actions;

export default userSlice.reducer;