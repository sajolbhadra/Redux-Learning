const { configureStore } = require("@reduxjs/toolkit");
const { default: quizzesReducer } = require("../Quizzes/quizzesSlice");
const { default: usersReducer } = require("../Users/usersSlice");
const { default: routesReducer } = require("../Routes/routesSlice");

export const store = configureStore({
  reducer: {
    quizzes: quizzesReducer,
    users: usersReducer,
    routes: routesReducer
  },
});
