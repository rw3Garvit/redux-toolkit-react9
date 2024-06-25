import { createSlice } from "@reduxjs/toolkit";
import { get_user, post_user } from "../api/api";

let initialState = {
  user: [],
  isLoading: false,
  isError: false,
};

let userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    //get user
    builder.addCase(get_user.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(get_user.fulfilled, (state, action) => {
      console.log(action);
      state.user = action.payload;
      state.isLoading = false;
    });

    builder.addCase(get_user.rejected, (state, action) => {
      state.isError = true;
    });

    //post user

    builder.addCase(post_user.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(post_user.fulfilled, (state, action) => {
      state.user.push(action.payload);
      state.isLoading = false;
    });
    builder.addCase(post_user.rejected, (state, action) => {
      state.isError = true;
    });
  },
});

export default userSlice.reducer;
