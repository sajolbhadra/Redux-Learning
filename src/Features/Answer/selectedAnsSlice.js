import { createSlice } from "@reduxjs/toolkit";


export const selectedAnsSlice = createSlice({
  name: "selectedAns",
  initialState: { selectedAns: []},
  reducers: {
    handleSelectedAns: (state, action) => {
      state.selectedAns.push(action.payload);
    },
    handleSelectedAnsReset: (state) => {
        state.selectedAns = [];
      },
  },
});

export const { handleSelectedAns, handleSelectedAnsReset } = selectedAnsSlice.actions;

export default selectedAnsSlice.reducer;
