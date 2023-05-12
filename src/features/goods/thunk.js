import axios from 'axios'
import { createAsyncThunk } from "@reduxjs/toolkit"

export const getUsersAPI = createAsyncThunk('goods/getUsersAPI', async () => {
    const res = await axios.get('http://localhost:3001/users')
    
    return res.data
})

export const postUsersAPI = createAsyncThunk('goods/postUsersAPI', async (data) => {
    const res = await axios.post('http://localhost:3001/users', data)
    
    return res.data
})
export const pathUsersAPI = createAsyncThunk('goods/pathUsersAPI', async (data) => {
    const res = await axios.patch('http://localhost:3001/users/'+ data.id ,  data.obj)

    return res.data
})