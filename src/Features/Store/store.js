const { configureStore } = require("@reduxjs/toolkit");
const { default: quizzesReducer } = require("../Quizzes/quizzesSlice");
const { default: questionReducer } = require("../Quizzes/questionSlice");
const { default: usersReducer } = require("../Users/usersSlice");
const { default: routesReducer } = require("../Routes/routesSlice");
const { default: gemsReducer } = require("../GemController/gemSlice");
const { default: booleanReducer } = require("../Boolean/booleanSlice");
const { default: counterReducer } = require("../Counter/questionsCounterSlice");
const { default: addedReducer } = require("../Added/AddedSlice");

const { default: addedOptionReducer } = require("../Added/AddedOption");
const { default: commentsReducer } = require("../Answer/postCommentSlice");
const { default: forumsReducer } = require("../Forums/forumSlice");
const { default: selectedAnsReducer } = require("../Answer/selectedAnsSlice");
const { default: selectedReducer } = require("../Answer/selectedSlice");
const { default: totalAnsReducer } = require("../Answer/totalAnsSlice");

export const store = configureStore({
  reducer: {
    quizzes: quizzesReducer,
    users: usersReducer,
    routes: routesReducer,
    gems: gemsReducer,
    boolean: booleanReducer,
    counter: counterReducer,
    question: questionReducer,
    added: addedReducer,
    addedOption: addedOptionReducer,
    comments: commentsReducer,
    forums: forumsReducer,
    selectedAns: selectedAnsReducer,
    selected: selectedReducer,
    totalAns: totalAnsReducer,
  },
});
