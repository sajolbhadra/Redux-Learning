import { createSlice } from "@reduxjs/toolkit";


export const addedSlice = createSlice({
  name: "added",
  initialState: { added: []},
  reducers: {
    handleAdded: (state, action) => {
      state.added.push(action.payload);
    },
    handleReset: (state) => {
        state.added = [];
      },
  },
});

export const { handleAdded, handleReset } = addedSlice.actions;

export default addedSlice.reducer;
