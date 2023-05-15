import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {
  deleteAnswersAPI,
  getAnswersAPI,
  pathAnswersAPI,
  postAnswersAPI,
} from "../thunk";

const initialState = {
  data: [],
  status: "idle",
};

export const answersSlice = createSlice({
  name: "answers",
  initialState,
  reducers: {
    changeOpros: (state, action) => {
      const { id, arr, opr } = action.payload;
      const cop = [...state.data];

      state.filluser = cop.filter((item) => item.userid == id)[0];
      let idx = cop.indexOf(state.filluser);

      cop[idx][opr] = arr;
      state.data = cop;
    },
    deleteAnswer: (state, action) => {
      const { idx  , idxOpr} = action.payload;
      let cop = [...state.data];
      cop[idxOpr].DefAnswers.splice(idx, 1);
      state.data = cop
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getAnswersAPI.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getAnswersAPI.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "fulfilled";
      })
      .addCase(getAnswersAPI.rejected, (state, action) => {
        state.status = "rejected";
      })
      .addCase(postAnswersAPI.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(postAnswersAPI.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "fulfilled";
      })
      .addCase(postAnswersAPI.rejected, (state, action) => {
        state.status = "rejected";
      })
      .addCase(pathAnswersAPI.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(pathAnswersAPI.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "fulfilled";
      })
      .addCase(pathAnswersAPI.rejected, (state, action) => {
        state.status = "rejected";
      })
      .addCase(deleteAnswersAPI.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(deleteAnswersAPI.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "fulfilled";
      })
      .addCase(deleteAnswersAPI.rejected, (state, action) => {
        state.status = "rejected";
      });
  },
});

export const {deleteAnswer} = answersSlice.actions;

export default answersSlice.reducer;
