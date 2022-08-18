import axios from "axios";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const fetchRoutes = createAsyncThunk("routes/fetchRoutes", async () => {
  const res = await axios.get("http://localhost:5000/routes");
  return res.data;
});

const routesSlice = createSlice({
  name: "routes",
  initialState: {
    isLoading: false,
    routes: [],
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRoutes.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchRoutes.fulfilled, (state, action) => {
      state.isLoading = false;
      state.routes = action.payload;
      state.error = null;
    });
    builder.addCase(fetchRoutes.rejected, (state, action) => {
      state.isLoading = false;
      state.routes = [];
      state.error = action.error.message;
    });
  },
});

export default routesSlice.reducer;
