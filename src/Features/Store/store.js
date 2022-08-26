const { configureStore } = require("@reduxjs/toolkit");
const { default: quizzesReducer } = require("../Quizzes/quizzesSlice");
const { default: usersReducer } = require("../Users/usersSlice");
const { default: routesReducer } = require("../Routes/routesSlice");
const { default: gemsReducer } = require("../GemController/gemSlice");
const { default: booleanReducer } = require("../Boolean/booleanSlice");

export const store = configureStore({
  reducer: {
    quizzes: quizzesReducer,
    users: usersReducer,
    routes: routesReducer,
    gems: gemsReducer,
    boolean: booleanReducer,
  },
});
