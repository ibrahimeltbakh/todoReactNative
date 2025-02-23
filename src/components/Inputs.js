import { Text, View, TextInput, TouchableHighlight } from 'react-native';
import { useState } from 'react';
import styles from '../Styles/styles';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../RTK/Slices/todosSlice';
const Inputs = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos);
    const addNewTodo = () => {
        const obj = {
            id: Date.now(),
            title,
            description,
            isDone: false,
        }
        dispatch(addTodo(obj))
        setTitle("");
        setDescription("");
    }
    return (
        <>
            <View style={styles.inputContainer}>
                <TextInput
                    value={title}
                    style={styles.input}
                    placeholder="Enter Title"
                    onChangeText={(value) => { setTitle(value) }}
                />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    value={description}
                    style={styles.input}
                    placeholder="Enter Descreption"
                    onChangeText={(value) => { setDescription(value) }}
                />
            </View>
            <TouchableHighlight onPress={() => { addNewTodo() }}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Add Task</Text>
                </View>
            </TouchableHighlight>
        </>
    )
}

export default Inputs
