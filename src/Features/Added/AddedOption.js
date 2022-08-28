import { createSlice } from "@reduxjs/toolkit";


export const addedOptionSlice = createSlice({
  name: "addedOption",
  initialState: { addedOption: []},
  reducers: {
    handleAddedOption: (state, action) => {
      state.addedOption.push(action.payload);
    },
    handleReset: (state) => {
        state.addedOption = [];
      },
  },
});

export const { handleAddedOption, handleReset } = addedOptionSlice.actions;

export default addedOptionSlice.reducer;
