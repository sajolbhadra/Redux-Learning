import { createSlice } from "@reduxjs/toolkit";

export const booleanSlice = createSlice({
  name: "boolean",
  initialState: {
    route: false,
    routeContent: false,

    isBg: false,

    isTrue: false,
  },
  reducers: {
    handleRoute: (state) => {
      state.route = true;

      state.routeContent = false;

      state.isBg = false;

      state.isTrue = false;
    },
    handleRouteContent: (state) => {
      state.route = false;

      state.routeContent = true;
      state.isBg = false;
      state.isTrue = false;
    },
    handleReload: (state) => {
      state.route = false;

      state.routeContent = false;

      state.isBg = false;
      state.isTrue = false;
    },

    handleIsBg: (state) => {
      state.route = false;

      state.routeContent = false;

      state.isBg = true;
      state.isTrue = false;
    },

    handleIsTrue: (state) => {
      state.route = false;

      state.routeContent = false;

      state.isBg = false;
      state.isTrue = true;
    },
    handleReset: (state) => {
      state.route = false;
      state.reload = false;
      state.routeContent = false;
      state.isResult = false;
      state.isBg = false;
      state.isTrue = false;
    },
  },
});

export const {
  handleRoute,
  handleRouteContent,
  handleReload,
  handleIsResult,
  handleIsBg,
  handleReset,
  handleIsShowAll,
  handleIsTrue,
  handleIsLoading,
  handleIsAskOpen,
  handleIsLoadingForum,
} = booleanSlice.actions;

export default booleanSlice.reducer;
