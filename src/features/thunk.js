import axios from 'axios'
import { createAsyncThunk } from "@reduxjs/toolkit"

export const getUsersAPI = createAsyncThunk('/getUsersAPI', async () => {
    const res = await axios.get('http://localhost:3001/users')
    return res.data
})

export const postUsersAPI = createAsyncThunk('/postUsersAPI', async (data) => {
    const res = await axios.post('http://localhost:3001/users', data)
    return res.data
})
export const pathUsersAPI = createAsyncThunk('/pathUsersAPI', async (data) => {
    const res = await axios.patch('http://localhost:3001/users/'+ data.id ,  data.obj)
    return res.data
})



export const getAnswersAPI = createAsyncThunk('answers/getAnswersAPI', async () => {
    const res = await axios.get('http://localhost:3001/answers')

    console.log(res.data);

    return res.data
})

export const postAnswersAPI = createAsyncThunk('answers/postAnswersAPI', async (data) => {
    const res = await axios.post('http://localhost:3001/answers', data)
    return res.data
})
export const pathAnswersAPI = createAsyncThunk('answers/pathAnswersAPI', async (data) => {
    const res = await axios.patch('http://localhost:3001/answers/'+ data.id ,  data.obj)
    return res.data
})
export const deleteAnswersAPI = createAsyncThunk('answers/deleteAnswersAPI', async (data) => {
    const res = await axios.patch('http://localhost:3001/answers/'+ data.id)
    return res.data
})