import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { quizReducers } from "../reducers/quizReducers";
import { routesReducers } from "../reducers/routesReducers";

const rootReducers = combineReducers({
    quizR: quizReducers,
    routesR: routesReducers
});

export const store = createStore(rootReducers,applyMiddleware(thunk));