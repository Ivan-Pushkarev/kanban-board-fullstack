import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const API = axios.create({baseURL: 'http://localhost:5000/cards'})

export const getTaskById = createAsyncThunk(
    'task/getTaskById',
    async (id, thunkAPI) => {
        try {
            const response = await API.get(`/${id}`)
            return response.data
        } catch (err) {
            return thunkAPI.rejectWithValue('Tasks get by ID error')
        }
    }
)

export const taskGetAll = createAsyncThunk(
    'task/taskGetAll',
    async (id, thunkAPI) => {
        try {
            const response = await  API.get('/')
            return response.data
        } catch (err) {
            return thunkAPI.rejectWithValue('Tasks get by ID error')
        }
    }
)

export const createTask = createAsyncThunk(
    'task/createTask',
    async({task, router}, thunkAPI)=>{
        try {
            const response = await API.post('/', task)
            router.push('/')
            return response.data
        } catch (err) {
            return thunkAPI.rejectWithValue('Task wasn\'t created')
        }
    }
)

export const updateTask = createAsyncThunk(
    'task/updateTask',
    async({id, task, router}, thunkAPI)=>{
        try {
            const response = await API.patch(`/${id}`, task)
            thunkAPI.dispatch(taskGetAll())
            if(router.length) router.push('/')
            return response.data
        } catch (err) {
            return thunkAPI.rejectWithValue('Task wasn\'t updated')
        }
    }
)

export const deleteTask = createAsyncThunk(
    'task/deleteTask',
    async(id, thunkAPI)=>{
        try {
            const response = await  API.delete(`/${id}`)
            thunkAPI.dispatch(taskGetAll())
            return response.data
        } catch (err) {
            return thunkAPI.rejectWithValue('Task wasn\'t deleted')
        }
    }
)