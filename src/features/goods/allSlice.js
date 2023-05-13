import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getUsersAPI, pathUsersAPI, postUsersAPI } from "./thunk";
// import { deleteGoodAPI, getGoodAPI, pathGoodAPI, postGoodAPI } from "./thunk";

const initialState = {
  data: [],
  filluser: [],
  status: "idle",
};

export const allSlice = createSlice({
  name: "all",
  initialState,
  reducers: {
    getAll: (state, action) => {
      state.data = [...state.data];
      console.log(state.data);
    },
    changeOpros: (state, action) => {
      const { id, arr, opr } = action.payload;
      const cop = [...state.data];
      console.log(cop);

      state.filluser = cop.filter((item) => item.userid == id)[0];
      let idx = cop.indexOf(state.filluser);
      console.log(cop.filter((item) => item.userid == id)[0]);

      cop[idx][opr] = arr;
      state.data = cop;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getUsersAPI.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getUsersAPI.fulfilled, (state, action) => {
        state.data = action.payload;
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
