import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tunes: [],
  total: 0,
};

const tunesSlice = createSlice({
  name: "tunes",
  initialState: initialState,
  reducers: {
    addTune: (state, action) => {
      state.tunes.push(action.payload);
      state.total += action.payload.trackPrice;
    },
    removeTune: (state, action) => {
      state.tunes = state.tunes.filter(
        (tune) => tune.trackId !== action.payload.trackId
      );
      state.total -= action.payload.trackPrice;
    },
  },
});

export const { addTune, removeTune } = tunesSlice.actions;

export default tunesSlice.reducer;
