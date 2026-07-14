import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface PlaylistState {
    playlist: string[];
}

const initialState: PlaylistState = {
    playlist: [],
};

export const playlistSlice = createSlice({
    name: "playlist",
    initialState,
    reducers: {
        add: (state, action: PayloadAction<string>) => {
            state.playlist.push(action.payload);
        },
        remove: (state, action: PayloadAction<string>) => {
            state.playlist = state.playlist.filter((song) => song !== action.payload);
        },
    },
});

export const { add, remove } = playlistSlice.actions;

export default playlistSlice.reducer;
