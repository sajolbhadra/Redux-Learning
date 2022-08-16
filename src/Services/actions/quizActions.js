import axios from "axios";
import {
  GET_QUIZ_FAILED,
  GET_QUIZ_REQUEST,
  GET_QUIZ_SUCCESS,
} from "../constants/constants";

export const getQUIZ = (name) => async (dispatch) => {
  dispatch({ type: GET_QUIZ_REQUEST });
  try {
    const res = await axios.get("http://localhost:5000/quizzes");
    // const data = res.json();
    const final = res?.data?.filter(a => a.title===name)
    const ques = final[0].questions
    dispatch({ type: GET_QUIZ_SUCCESS, payload: ques });
  } catch (error) {
    dispatch({ type: GET_QUIZ_FAILED, payload: error.message });
  }
};


