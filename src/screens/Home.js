import React from 'react'
import Inputs from '../components/Inputs'
import Actions from '../components/Actions'
import { View } from 'react-native';
import styles from '../Styles/styles';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getStoredTodos } from '../RTK/Slices/todosSlice';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Toaster } from 'react-hot-toast';
const Home = () => {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getStoredTodos());
    }, [dispatch])
    useEffect(() => {
        AsyncStorage.setItem("todos", JSON.stringify(todos));
    }, [todos])

    return (
        <View style={styles.container}>
            <Inputs />
            {
                todos.length > 0 && (
                    <Actions />
                )
            }
            <Toaster />
        </View >
    )
}

export default Home
