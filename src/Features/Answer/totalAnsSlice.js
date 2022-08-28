import { createSlice } from "@reduxjs/toolkit";


export const totalAnsSlice = createSlice({
  name: "totalAns",
  initialState: { totalAns: []},
  reducers: {
    handleTotalAns: (state, action) => {
      state.totalAns.push(action.payload);
    },
    handleReset: (state) => {
        state.totalAns = [];
      },
  },
});

export const { handleTotalAns, handleReset } = totalAnsSlice.actions;

export default totalAnsSlice.reducer;
