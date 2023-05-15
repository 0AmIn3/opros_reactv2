import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getUsersAPI = createAsyncThunk("/getUsersAPI", async () => {
  const res = await axios.get(
    "https://tealband-4afc1-default-rtdb.firebaseio.com/users.json"
  );
  return {
    data: Object.values(res.data),
    userKey: res.data,
  };
});

export const postUsersAPI = createAsyncThunk("/postUsersAPI", async (data) => {
  //   const res = await axios.post("http://localhost:3001/users", data);
  const res = await axios.post(
    "https://tealband-4afc1-default-rtdb.firebaseio.com/users.json",
    data
  );

  return res.data;
});
export const pathUsersAPI = createAsyncThunk("/pathUsersAPI", async (data) => {
  // const res = await axios.patch('http://localhost:3001/users/'+ data.id ,  data.obj)
 await axios.patch(
    `https://tealband-4afc1-default-rtdb.firebaseio.com/users/${data.key}.json`,
    data.obj
  );
  const res = await axios.get(
    "https://tealband-4afc1-default-rtdb.firebaseio.com/users.json"
  );

  return Object.values(res.data);
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
