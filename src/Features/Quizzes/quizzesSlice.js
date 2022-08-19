import axios from "axios";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const fetchQuizzes = createAsyncThunk(
  "quizzes/fetchQuizzes",
  async (name) => {
    const res = await axios.get("https://redux-learning-server.herokuapp.com/quizzes");
    const final = res?.data?.filter(a => a.title===name)
    const ques = final[0].questions
    return ques;
  }
);

const quizzesSlice = createSlice({
  name: "quizzes",
  initialState: {
    isLoading: false,
    quizzes: [],
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchQuizzes.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchQuizzes.fulfilled, (state, action) => {
      state.isLoading = false;
      state.quizzes = action.payload;
      state.error = null;
    });
    builder.addCase(fetchQuizzes.rejected, (state, action) => {
      state.isLoading = false;
      state.quizzes = [];
      state.error = action.error.message;
    });
  },
});

export default quizzesSlice.reducer;
