import {
  GET_QUIZ_FAILED,
  GET_QUIZ_REQUEST,
  GET_QUIZ_SUCCESS,
} from "../constants/constants";

const initialState = {
  isLoading: false,
  quizzes: [],
  error: null,
};

export const quizReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_QUIZ_REQUEST:
      return {
        isLoading: true,
        quizzes: [],
        error: null,
      };
    case GET_QUIZ_SUCCESS:
      return {
        isLoading: false,
        quizzes: action.payload,
        error: null,
      };
    case GET_QUIZ_FAILED:
      return {
        isLoading: false,
        quizzes: [],
        error: action.payload,
      };

    default:
      return state;
  }
};
