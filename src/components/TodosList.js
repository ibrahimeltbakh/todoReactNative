import React from 'react'
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import { Text, View, FlatList, Platform, Pressable } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo } from '../RTK/Slices/todosSlice';
import styles from '../Styles/styles';
const TodosList = ({ todos }) => {
    const dispatch = useDispatch();
    const toggleCheck = (id) => {
        dispatch(toggleTodo(id))
    }
    const navigation = useNavigation();
    return (
        <FlatList
            data={todos} keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <Pressable style={(item.isDone) ? ({ ...styles.taskView, borderColor: "teal" }) : (styles.taskView)}
                    onPress={() => {
                        navigation.navigate('Details', { taskId: item.id, taskTitle: item.title });
                    }}>
                    {item.isDone ?
                        (<Text style={styles.taskDone}>{item.title}</Text>) :
                        (<Text style={styles.taskInprogress}>{item.title}</Text>)
                    }
                    <View style={{ flexDirection: "row", gap: 4 }}>
                        <Pressable onPress={() => { toggleCheck(item.id) }}>
                            {item.isDone ?
                                (<AntDesign name="checkcircleo" size={24} color="teal" />) :
                                (<MaterialCommunityIcons name="progress-clock" size={26} color="orange" />)
                            }
                        </Pressable >
                        <Pressable onPress={() => { dispatch(deleteTodo(item.id)) }}>
                            {(Platform.OS == "web" || Platform.OS == "android") ? (
                                <Feather name="trash" size={24} color="red" />
                            ) : (
                                <FontAwesome5 name="check-square" size={20} color="black" />
                            )
                            }
                        </Pressable>

                    </View>
                </Pressable>
            )} />
    )
}

export default TodosList
