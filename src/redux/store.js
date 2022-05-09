import {configureStore, createSlice} from "@reduxjs/toolkit";
import {createTask, deleteTask, getTaskById, taskGetAll, updateTask} from "./actionCreators";

const taskSlice = createSlice({
    name: 'task',
    initialState: {
        tasks: [],
        statuses: ['Todo', 'In Progress', 'Review', 'Done'],
        error: '',
        selectedTask: {
            name: '',
            description: '',
            priority: '1',
            status: 'Todo'
        },
    },
    reducers: {
        editFormHandler: (state, action) => {
            state.selectedTask[action.payload.name] = action.payload.value
        }
    },
    extraReducers: {
        [taskGetAll.fulfilled.type]: (state, action) => {
            state.tasks = action.payload
        },
        [taskGetAll.rejected.type]: (state, action) => {
            state.error = action.payload
        },
        [getTaskById.fulfilled.type]: (state, action) => {
            state.selectedTask = action.payload
        },
        [getTaskById.rejected.type]: (state, action) => {
            state.error = action.payload
        },
        [createTask.rejected.type]: (state, action) => {
            state.error = action.payload
        },
        [updateTask.rejected.type]: (state, action) => {
            state.error = action.payload
        },
        [deleteTask.rejected.type]: (state, action) => {
            state.error = action.payload
        }
    }
})

export const {editFormHandler} = taskSlice.actions
const taskReducer = taskSlice.reducer

const store = configureStore({
    reducer: {
        task: taskReducer
    }
})

export default store