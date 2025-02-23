import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./Slices/todosSlice"


export const store = configureStore({
    reducer: {
        todos: todoSlice
    }
})