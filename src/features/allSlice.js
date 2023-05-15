import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getUsersAPI, pathUsersAPI, postUsersAPI } from "./thunk";
// import { deleteGoodAPI, getGoodAPI, pathGoodAPI, postGoodAPI } from "./thunk";

const initialState = {
  data: [],
  userKey: [],
  status: "idle",
};

export const allSlice = createSlice({
  name: "all",
  initialState,
  reducers: {
    getAll: (state, action) => {
      state.data = [...state.data];
    },

  },
  extraReducers(builder) {
    builder
      .addCase(getUsersAPI.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getUsersAPI.fulfilled, (state, action) => {
        state.data = action.payload.data;
        state.userKey = action.payload.userKey
        state.status = "fulfilled";
      })
      .addCase(getUsersAPI.rejected, (state, action) => {
        state.status = "rejected";
      })
      .addCase(postUsersAPI.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(postUsersAPI.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "fulfilled";
      })
      .addCase(postUsersAPI.rejected, (state, action) => {
        state.status = "rejected";
      })
      .addCase(pathUsersAPI.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(pathUsersAPI.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "fulfilled";
      })
      .addCase(pathUsersAPI.rejected, (state, action) => {
        state.status = "rejected";
      });
  },
});

export const { getAll, changeOpros } = allSlice.actions;

export default allSlice.reducer;
