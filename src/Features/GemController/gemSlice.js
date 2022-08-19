import { createSlice } from "@reduxjs/toolkit";

export const gemSlice = createSlice({
  name: "gem",
  initialState: { gem: 0, modalState: false },
  reducers: {
    increment: (state, action) => {
      state.gem = state.gem + action.payload;
      state.modalState= true
    },
    decrement: (state, action) => {
      state.gem = state.gem - action.payload;
      state.modalState= true
    },
  },
});

export const { increment, decrement } = gemSlice.actions;

export default gemSlice.reducer;
