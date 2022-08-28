import { createSlice } from "@reduxjs/toolkit";

export const booleanSlice = createSlice({
  name: "boolean",
  initialState: {
    route: false,
    routeContent: false,
    reload: false,
    isResult: false,
    isBg: false,
    isShowAll: false,
    isTrue: false,
    isLoading: false,
    isAskOpen: false,
    isLoadingForum: false,
    showAnswer: false,
  },
  reducers: {
    handleRoute: (state) => {
      state.route = true;
      state.reload = false;
      state.routeContent = false;
      state.isResult = false;
      state.isBg = false;
      state.isShowAll = false;
      state.isTrue = false;
      state.isLoading = false;
      state.isAskOpen = false;
      state.isLoadingForum = false;
      state.showAnswer = false;
    },
    handleRouteContent: (state) => {
      state.route = false;
      state.reload = false;
      state.routeContent = true;
      state.isResult = false;
      state.isBg = false;
      state.isShowAll = false;
      state.isTrue = false;
      state.isLoading = false;
      state.isAskOpen = false;
      state.isLoadingForum = false;
      state.showAnswer = false;
    },
    handleReload: (state) => {
      state.route = false;
      state.reload = !state.reload;
      state.routeContent = false;
      state.isResult = false;
      state.isBg = false;
      state.isShowAll = false;
      state.isTrue = false;
      state.isLoading = false;
      state.isAskOpen = false;
      state.isLoadingForum = false;
      state.showAnswer = false;
    },
    handleIsResult: (state) => {
      state.route = false;
      state.reload = false;
      state.routeContent = false;
      state.isResult = true;
      state.isBg = false;
      state.isShowAll = false;
      state.isTrue = false;
      state.isLoading = false;
      state.isAskOpen = false;
      state.isLoadingForum = false;
      state.showAnswer = false;
    },
    handleIsBg: (state) => {
      state.route = false;
      state.reload = false;
      state.routeContent = false;
      state.isResult = false;
      state.isBg = true;
      state.isShowAll = false;
      state.isTrue = false;
      state.isLoading = false;
      state.isAskOpen = false;
      state.isLoadingForum = false;
      state.showAnswer = false;
    },
    handleIsShowAll: (state) => {
      state.route = false;
      state.reload = false;
      state.routeContent = false;
      state.isResult = false;
      state.isBg = false;
      state.isShowAll = true;
      state.isTrue = false;
      state.isLoading = false;
      state.isAskOpen = false;
      state.isLoadingForum = false;
      state.showAnswer = false;
    },
    handleIsTrue: (state) => {
      state.route = false;
      state.reload = false;
      state.routeContent = false;
      state.isResult = false;
      state.isBg = false;
      state.isShowAll = false;
      state.isTrue = true;
      state.isLoading = false;
      state.isAskOpen = false;
      state.isLoadingForum = false;
      state.showAnswer = false;
    },
    handleIsLoading: (state) => {
      state.route = false;
      state.reload = false;
      state.routeContent = false;
      state.isResult = false;
      state.isBg = false;
      state.isShowAll = false;
      state.isTrue = false;
      state.isLoading = !state.isLoading;
      state.isAskOpen = false;
      state.isLoadingForum = false;
      state.showAnswer = false;
    },
    handleIsAskOpen: (state) => {
      state.route = false;
      state.reload = false;
      state.routeContent = false;
      state.isResult = false;
      state.isBg = false;
      state.isShowAll = false;
      state.isTrue = false;
      state.isLoading = false;
      state.isAskOpen = !state.isAskOpen;
      state.isLoadingForum = false;
      state.showAnswer = false;
    },
    handleIsLoadingForum: (state) => {
      state.route = false;
      state.reload = false;
      state.routeContent = false;
      state.isResult = false;
      state.isBg = false;
      state.isShowAll = false;
      state.isTrue = false;
      state.isLoading = false;
      state.isAskOpen = false;
      state.isLoadingForum = true;
      state.showAnswer = false;
    },
    handleShowAnswer: (state) => {
      state.route = false;
      state.reload = false;
      state.routeContent = false;
      state.isResult = false;
      state.isBg = false;
      state.isShowAll = false;
      state.isTrue = false;
      state.isLoading = false;
      state.isAskOpen = false;
      state.isLoadingForum = false;
      state.showAnswer = true;
    },
    handleReset: (state) => {
      state.route = false;
      state.reload = false;
      state.routeContent = false;
      state.isResult = false;
      state.isBg = false;
      state.isShowAll = false;
      state.isTrue = false;
      state.isLoading = false;
      state.isAskOpen = false;
      state.isLoadingForum = false;
      state.showAnswer = false;
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
  handleShowAnswer,
} = booleanSlice.actions;

export default booleanSlice.reducer;
