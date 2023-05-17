import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getUserAPI, postUserAPI } from "../thunk";


const initialState = {
  data: [],
  userKey: [],
  status: "idle",
};

export const UsersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
  
  },
  extraReducers(builder) {
    builder
      .addCase(getUserAPI.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getUserAPI.fulfilled, (state, action) => {
        state.data = action.payload.data;
        state.userKey = action.payload.userKey
        state.status = "fulfilled";
      })
      .addCase(getUserAPI.rejected, (state, action) => {
        state.status = "rejected";
      })
      .addCase(postUserAPI.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(postUserAPI.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "fulfilled";
      })
      .addCase(postUserAPI.rejected, (state, action) => {
        state.status = "rejected";
      })
      // .addCase(pathAnswersAPI.pending, (state, action) => {
      //   state.status = "loading";
      // })
      // .addCase(pathAnswersAPI.fulfilled, (state, action) => {
      //   state.data = action.payload;
      //   state.status = "fulfilled";
      // })
      // .addCase(pathAnswersAPI.rejected, (state, action) => {
      //   state.status = "rejected";
      // })
      // .addCase(deleteAnswersAPI.pending, (state, action) => {
      //   state.status = "loading";
      // })
      // .addCase(deleteAnswersAPI.fulfilled, (state, action) => {
      //   state.data = action.payload;
      //   state.status = "fulfilled";
      // })
      // .addCase(deleteAnswersAPI.rejected, (state, action) => {
      //   state.status = "rejected";
      // });
  },
});

export const {deleteAnswer} = UsersSlice.actions;

export default UsersSlice.reducer;
