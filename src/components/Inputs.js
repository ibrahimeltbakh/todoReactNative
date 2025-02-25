import { Text, View, TextInput, TouchableHighlight } from 'react-native';
import { useState } from 'react';
import styles from '../Styles/styles';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../RTK/Slices/todosSlice';
import toast from 'react-hot-toast';
const Inputs = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const dispatch = useDispatch();

    const addNewTodo = () => {
        const obj = {
            id: Date.now(),
            title,
            description,
            isDone: false,
        }
        dispatch(addTodo(obj))
        toast.success('Task Added  Successfully!', {
            duration: 4000,
            position: 'top-center',
        })
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
            <TouchableHighlight style={styles.button}
                underlayColor="rgba(10, 110, 110, 0.5)" onPress={() => {
                    if (title == "" || description == "") {
                        toast.error("Enter Title and Description", {
                            duration: 4000,
                            position: 'top-center',
                        })
                    }
                    else {
                        addNewTodo();
                    }
                }}>
                <Text style={styles.buttonText}>Add Task</Text>
            </TouchableHighlight>
        </>
    )
}

export default Inputs
