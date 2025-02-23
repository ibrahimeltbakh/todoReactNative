import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// function to get all todos 
// i will use it in Home.js in useEffect when app open or reload fetch todos
export const getStoredTodos = createAsyncThunk("todosSlice/getStoredTodos", async () => {
    const todos = await AsyncStorage.getItem("todos");
    return todos ? JSON.parse(todos) : []
})

const todosSlice = createSlice({
    name: "todosSlice",
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            const updatedState = [...state, action.payload]
            return updatedState;
        },
        toggleTodo: (state, action) => {
            return newTodo = state.map((todo) =>
                todo.id === action.payload ?
                    { ...todo, isDone: !todo.isDone }
                    : todo);
        },
        deleteTodo: (state, action) => {
            return newTodo = state.filter((todo) => todo.id !== action.payload);
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getStoredTodos.fulfilled, (state, action) => {
            return action.payload;
        })
    }

})

export const { addTodo, toggleTodo, deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;