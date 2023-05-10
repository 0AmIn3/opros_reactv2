import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getUsersAPI, postUsersAPI } from "./thunk";
// import { deleteGoodAPI, getGoodAPI, pathGoodAPI, postGoodAPI } from "./thunk";

const initialState = {
  data: [],
  filluser: [],
  a:[],
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
      let cop = [...state.data];
      state.filluser = state.data.filter(
        (item) => item.userid == id
      )[0];
      let idx = cop.indexOf(state.filluser);
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
      // .addCase(postGoodAPI.pending, (state, action) => {
      //   state.status = "loading";
      // })
      // .addCase(postGoodAPI.fulfilled, (state, action) => {
      //   state.data = action.payload;
      //   state.status = "fulfilled";
      //   // console.log(state.data);
      // })
      // .addCase(postGoodAPI.rejected, (state, action) => {
      //   state.status = "rejected";
      // })
      // .addCase(pathGoodAPI.pending, (state, action) => {
      //   state.status = "loading";
      // })
      // .addCase(pathGoodAPI.fulfilled, (state, action) => {
      //   state.data = action.payload;
      //   state.status = "fulfilled";
      //   // console.log(state.data);
      // })
      // .addCase(pathGoodAPI.rejected, (state, action) => {
      //   state.status = "rejected";
      // })
      // .addCase(deleteGoodAPI.pending, (state, action) => {
      //   state.status = "loading";
      // })
      // .addCase(deleteGoodAPI.fulfilled, (state, action) => {
      //   state.data = action.payload;
      //   state.status = "fulfilled";
      //   // console.log(state.data);
      // })
      // .addCase(deleteGoodAPI.rejected, (state, action) => {
      //   state.status = "rejected";
      // });
  },
});

export const { getAll, changeOpros } = allSlice.actions;

export default allSlice.reducer;
