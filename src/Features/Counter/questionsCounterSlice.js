import { createSlice } from "@reduxjs/toolkit";


export const countSlice = createSlice({
  name: "count",
  initialState: { count: 1},
  reducers: {
    handleIncrement: (state, action) => {
      state.count = state.count + 1;
    },
    handleDecrement: (state, action) => {
      state.count = state.count - 1;
    },
    handleReset: (state) => {
        state.count = 1;
      },
  },
});

export const { handleIncrement, handleDecrement, handleReset } = countSlice.actions;

export default countSlice.reducer;
