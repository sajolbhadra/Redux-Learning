import axios from "axios";
import {
    GET_ROUTES_FAILED,
    GET_ROUTES_REQUEST,
    GET_ROUTES_SUCCESS,
  } from "../constants/constants";

export const getRoutes = () => async (dispatch) => {
    dispatch({ type: GET_ROUTES_REQUEST });
    try {
      const res = await axios.get("http://localhost:5000/routes");
      dispatch({ type: GET_ROUTES_SUCCESS, payload: res.data });
    } catch (error) {
      dispatch({ type: GET_ROUTES_FAILED, payload: error.message });
    }
  };