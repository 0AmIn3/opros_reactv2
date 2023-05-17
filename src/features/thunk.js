import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCompanyAPI = createAsyncThunk("/getCompanyAPI", async () => {
  const res = await axios.get(
    "https://tealband-4afc1-default-rtdb.firebaseio.com/company.json"
  );
  // console.log(res.data);
  return {
    data: Object.values(res.data),
    userKey: res.data,
  };
  
});

export const postCompanyAPI = createAsyncThunk("/postCompanyAPI", async (data) => {
  //   const res = await axios.post("http://localhost:3001/users", data);
  const res = await axios.post(
    "https://tealband-4afc1-default-rtdb.firebaseio.com/company.json",
    data
  );

  return res.data;
});
export const pathCompanyAPI = createAsyncThunk("/pathCompanyAPI", async (data) => {
  // const res = await axios.patch('http://localhost:3001/users/'+ data.id ,  data.obj)
 await axios.patch(
    `https://tealband-4afc1-default-rtdb.firebaseio.com/company/${data.key}.json`,
    data.obj
  );
  const res = await axios.get(
    "https://tealband-4afc1-default-rtdb.firebaseio.com/company.json"
  );

  return Object.values(res.data);
});





export const getUserAPI = createAsyncThunk("users/getUserAPI", async () => {
  const res = await axios.get(
    "https://tealband-4afc1-default-rtdb.firebaseio.com/allusers.json"
  );
  console.log(res.data);
  return {
    data: Object.values(res.data),
    userKey: res.data,
  };
  
});

export const postUserAPI = createAsyncThunk("users/postUserAPI", async (data) => {
  //   const res = await axios.post("http://localhost:3001/users", data);
  const res = await axios.post(
    "https://tealband-4afc1-default-rtdb.firebaseio.com/allusers.json",
    data
  );

  return res.data;
});
















export const getAnswersAPI = createAsyncThunk(
  "answers/getAnswersAPI",
  async () => {
    // const res = await axios.get("http://localhost:3001/answers");
    const res = await axios.get(
      "https://tealband-4afc1-default-rtdb.firebaseio.com/questions.json"
    );

    return res.data;
  }
);

export const postAnswersAPI = createAsyncThunk(
  "answers/postAnswersAPI",
  async (data) => {
    const res = await axios.post("http://localhost:3001/answers", data);
    return res.data;
  }
);
export const pathAnswersAPI = createAsyncThunk(
  "answers/pathAnswersAPI",
  async (data) => {
    const res = await axios.patch(
      "http://localhost:3001/answers/" + data.id,
      data.obj
    );
    return res.data;
  }
);
export const deleteAnswersAPI = createAsyncThunk(
  "answers/deleteAnswersAPI",
  async (data) => {
    const res = await axios.patch("http://localhost:3001/answers/" + data.id);
    return res.data;
  }
);
