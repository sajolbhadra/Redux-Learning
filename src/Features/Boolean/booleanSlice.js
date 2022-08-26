import { createSlice } from "@reduxjs/toolkit";

export const booleanSlice = createSlice({
  name: "boolean",
  initialState: {
    route: false,
    routeContent: false,
    reload:false
  },
  reducers: {
    handleRoute: (state) => {
      state.route = true;
      state.routeContent = false;
      state.reload = false;
    },
    handleRouteContent: (state) => {
      state.route = false;
      state.reload = false;
      state.routeContent = true;
    },
    handleReload: (state) => {
      state.route = false;
      state.reload = !state.reload;
      state.routeContent = false;
    },
  },
});

export const { handleRoute, handleRouteContent, handleReload } = booleanSlice.actions;

export default booleanSlice.reducer;
