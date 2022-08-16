import {
  GET_ROUTES_FAILED,
  GET_ROUTES_REQUEST,
  GET_ROUTES_SUCCESS,
} from "../constants/constants";

const initialState = {
  isLoading: false,
  routes: [],
  error: null,
};

export const routesReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROUTES_REQUEST:
      return {
        isLoading: true,
        routes: [],
        error: null,
      };
    case GET_ROUTES_SUCCESS:
      return {
        isLoading: false,
        routes: action.payload,
        error: null,
      };
    case GET_ROUTES_FAILED:
      return {
        isLoading: false,
        routes: [],
        error: action.payload,
      };

    default:
      return state;
  }
};
