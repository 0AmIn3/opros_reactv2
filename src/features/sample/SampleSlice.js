import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getSampleAPI, pathSampleAPI, postSampleAPI, putSampleAPI } from "../thunk";



const initialState = {
  data: [],
  userKey: [],
  status: "idle",
};

export const SampleSlice = createSlice({
  name: "sample",
  initialState,
  reducers: {
  
  },
  extraReducers(builder) {
    builder
      .addCase(getSampleAPI.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getSampleAPI.fulfilled, (state, action) => {
        state.data = action.payload.data || []
        state.userKey = action.payload.userKey || []
        state.status = "fulfilled";
      })
      .addCase(getSampleAPI.rejected, (state, action) => {
        state.status = "rejected";
      })
      .addCase(postSampleAPI.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(postSampleAPI.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "fulfilled";
      })
      .addCase(postSampleAPI.rejected, (state, action) => {
        state.status = "rejected";
      })
      .addCase(pathSampleAPI.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(pathSampleAPI.fulfilled, (state, action) => {
        state.data = action.payload.data;
        state.userKey = action.payload.userKey
        state.status = "fulfilled";
      })
      .addCase(pathSampleAPI.rejected, (state, action) => {
        state.status = "rejected";
      })
      .addCase(putSampleAPI.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(putSampleAPI.fulfilled, (state, action) => {
       state.data = action.payload.data;
        state.userKey = action.payload.userKey
        state.status = "fulfilled";
      })
      .addCase(putSampleAPI.rejected, (state, action) => {
        state.status = "rejected";
      })
  },
});

export const {} = SampleSlice.actions;

export default SampleSlice.reducer;
