import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchPostsAPI } from "../../api/api";

interface DummyAsyncState {
  response: string[];
  isLoading: boolean;
  error: string | any;
}

const initialState: DummyAsyncState = {
  response: [],
  isLoading: false,
  error: "",
};

const dummyAsyncSlice = createSlice({
  name: "dummyAsync",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsersAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUsersAsync.fulfilled, (state, action) => {
        state.response = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchUsersAsync.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export default dummyAsyncSlice;

//actions

const fetchUsersAsync = createAsyncThunk("dummyAsync/fetchUsers", async () => {
  const data = await fetchPostsAPI();
  return data;
});
