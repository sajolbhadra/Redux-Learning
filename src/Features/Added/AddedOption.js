import { createSlice } from "@reduxjs/toolkit";


export const addedOptionSlice = createSlice({
  name: "addedOption",
  initialState: { addedOption: []},
  reducers: {
    handleAddedOption: (state, action) => {
      state.addedOption.push(action.payload);
    },
    handleResetOption: (state) => {
        state.addedOption = [];
      },
  },
});

export const { handleAddedOption, handleResetOption } = addedOptionSlice.actions;

export default addedOptionSlice.reducer;
