import { createSlice } from "@reduxjs/toolkit";


export const selectedSlice = createSlice({
  name: "selected",
  initialState: { selected: []},
  reducers: {
    handleSelected: (state, action) => {
      state.selected=(action.payload);
    },
    handleSelectedReset: (state) => {
        state.selected = [];
      },
  },
});

export const { handleSelected, handleSelectedReset } = selectedSlice.actions;

export default selectedSlice.reducer;
