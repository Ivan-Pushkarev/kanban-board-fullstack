import {configureStore} from "@reduxjs/toolkit";
import { cardApi } from './api'

const store = configureStore({
    reducer: {
        [ cardApi.reducerPath ]: cardApi.reducer
    },
     middleware: getDefaultMiddleware => getDefaultMiddleware().concat(cardApi.middleware)
})

export default store