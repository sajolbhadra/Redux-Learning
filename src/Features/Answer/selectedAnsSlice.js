import { createSlice } from "@reduxjs/toolkit";


export const selectedAnsSlice = createSlice({
  name: "selectedAns",
  initialState: { selectedAns: []},
  reducers: {
    handleSelectedAns: (state, action) => {
      state.selectedAns.push(action.payload);
    },
    handleReset: (state) => {
        state.selectedAns = [];
      },
  },
});

export const { handleSelectedAns, handleReset } = selectedAnsSlice.actions;

export default selectedAnsSlice.reducer;
