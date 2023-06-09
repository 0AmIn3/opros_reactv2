import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCompanyAPI = createAsyncThunk("/getCompanyAPI", async () => {
  const res = await axios.get(
    "https://tealband-4afc1-default-rtdb.firebaseio.com/company.json"
  );
  return {
    data: Object.values(res.data),
    userKey: res.data,
  };
  
});

export const postCompanyAPI = createAsyncThunk("/postCompanyAPI", async (data) => {
  const res = await axios.post(
    "https://tealband-4afc1-default-rtdb.firebaseio.com/company.json",
    data
  );

  return res.data;
});
export const deleteCompanyAPI = createAsyncThunk("/deleteCompanyAPI", async (data) => {
   await axios.delete(
    `https://tealband-4afc1-default-rtdb.firebaseio.com/company/${data}.json`  );
    const res = await axios.get(
      "https://tealband-4afc1-default-rtdb.firebaseio.com/company.json"
    );
  return res.data;
});
export const pathCompanyAPI = createAsyncThunk("/pathCompanyAPI", async (data) => {
 await axios.patch(
    `https://tealband-4afc1-default-rtdb.firebaseio.com/company/${data.key}.json`,
    data.obj
  );
  const res = await axios.get(
    "https://tealband-4afc1-default-rtdb.firebaseio.com/company.json"
  );

  return {
    data: Object.values(res.data),
    userKey: res.data,
  };
});





export const getUserAPI = createAsyncThunk("users/getUserAPI", async () => {
  const res = await axios.get(
    "https://tealband-4afc1-default-rtdb.firebaseio.com/allusers.json"
  );
  return {
    data: Object.values(res.data),
    userKey: res.data,
  };
  
});

export const postUserAPI = createAsyncThunk("users/postUserAPI", async (data) => {
  const res = await axios.post(
    "https://tealband-4afc1-default-rtdb.firebaseio.com/allusers.json",
    data
  );

  return res.data;
});

export const pathUserAPI = createAsyncThunk("users/pathUserAPI", async (data) => {
  await axios.patch(
    `https://tealband-4afc1-default-rtdb.firebaseio.com/allusers/${data.key}.json`,
    data.obj
  );
  const res = await axios.get(
    "https://tealband-4afc1-default-rtdb.firebaseio.com/allusers.json"
  );

  return {
    data: Object.values(res.data),
    userKey: res.data,
  };
});
export const putUserAPI = createAsyncThunk("users/putUserAPI", async (dat) => {
  await axios.put(
    `https://tealband-4afc1-default-rtdb.firebaseio.com/allusers.json`,
    dat
  );
  const res = await axios.get(
    "https://tealband-4afc1-default-rtdb.firebaseio.com/allusers.json"
  );

  return {
    data: Object.values(res.data),
    userKey: res.data,
  };
});


export const getSampleAPI = createAsyncThunk("sample/getSampleAPI", async () => {
  const res = await axios.get(
    "https://tealband-4afc1-default-rtdb.firebaseio.com/sample.json"
  );
  return {
    data: Object.values(res.data),
    userKey: res.data,
  };
  
});

export const postSampleAPI = createAsyncThunk("sample/postSampleAPI", async (data) => {
  const res = await axios.post(
    "https://tealband-4afc1-default-rtdb.firebaseio.com/sample.json",
    data
  );

  return res.data;
});

export const pathSampleAPI = createAsyncThunk("sample/pathSampleAPI", async (data) => {
  await axios.patch(
    `https://tealband-4afc1-default-rtdb.firebaseio.com/sample/${data.key}.json`,
    data.obj
  );
  const res = await axios.get(
    "https://tealband-4afc1-default-rtdb.firebaseio.com/sample.json"
  );

  return {
    data: Object.values(res.data),
    userKey: res.data,
  };
});
export const putSampleAPI = createAsyncThunk("sample/putSampleAPI", async (dat) => {
  await axios.put(
    `https://tealband-4afc1-default-rtdb.firebaseio.com/sample.json`,
    dat
  );
  const res = await axios.get(
    "https://tealband-4afc1-default-rtdb.firebaseio.com/sample.json"
  );

  return {
    data: Object.values(res.data),
    userKey: res.data,
  };
});
