import axios from 'axios'
// import { createAsyncThunk } from "@reduxjs/toolkit";

import { createAsyncThunk } from "@reduxjs/toolkit"


// export const getGoodAPI = createAsyncThunk('goods/getGoodAPI', async () => {
//     const res = await axios.get('http://localhost:3001/goods')

//     return res.data
// })
// export const postGoodAPI = createAsyncThunk('goods/postGoodAPI', async (data) => {
//     const res = await axios.post('http://localhost:3001/goods' , data)

//     return res.data
// })
// export const pathGoodAPI = createAsyncThunk('goods/pathGoodAPI', async (data) => {
//     const res = await axios.patch('http://localhost:3001/goods/'+ data.id , data.path)

//     return res.data
// })
// export const deleteGoodAPI = createAsyncThunk('goods/deleteGoodAPI', async (data) => {
//     const res = await axios.delete('http://localhost:3001/goods/'+ data)

    
//     return res.data
// })

// export const getLikeAPI = createAsyncThunk('goods/getLikeAPI', async () => {
//     const res = await axios.get('http://localhost:3001/likes')

//     return res.data
// })
// export const postLikeAPI = createAsyncThunk('goods/postLikeAPI', async (data) => {
//     const res = await axios.post('http://localhost:3001/likes' , data)

//     return res.data
// })
// export const pathLikeAPI = createAsyncThunk('goods/pathLikeAPI', async (data) => {
//     const res = await axios.patch('http://localhost:3001/likes/'+ data.id , data.path)

//     return res.data
// })
// export const deleteLikeAPI = createAsyncThunk('goods/deleteLikeAPI', async (data) => {
//     const res = await axios.delete('http://localhost:3001/likes/'+ data)

//     return res.data
// })

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