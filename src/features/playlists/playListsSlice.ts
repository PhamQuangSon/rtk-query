import { createSelector, createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../app/store";

const initialState = {
    playlists: null,
    discover_weekly: null
}

export const playListsSlice = createSlice({
    name: 'playlists',
    initialState,
    reducers: {
        setUserPlayLists: (state, action) => {
            state.playlists = action.payload;
            localStorage.setItem('playlists', action.payload);
        },
        setDiscoverWeekly: (state, action) => {
            state.discover_weekly = action.payload;
            localStorage.setItem('discover_weekly', action.payload);
        },
    }
});

const selector = (state: RootState) => state.playlists;

export const selectPlaylists = createSelector(
    selector,
    (state) => state.playlists,
)

export const selectDiscoverWeekly= createSelector(
    selector,
    (state) => state.discover_weekly,
)

export const { setUserPlayLists,  setDiscoverWeekly} = playListsSlice.actions;

export default playListsSlice.reducer;