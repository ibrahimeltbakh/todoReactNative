import React from 'react'
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, SafeAreaView, ScrollView, View, FlatList, TextInput, Platform, TouchableHighlight, Pressable } from 'react-native';
const Home = () => {
    const actions = [
        { id: "1", name: "All", action: "All" },
        { id: "2", name: "In Progress", action: "In Progress" },
        { id: "3", name: "Done", action: "done" },
    ]
    const tasks = [
        { id: 1, title: "Task 1", complete: false },
        { id: 2, title: "Task 2", complete: false },
    ]
    const navigation = useNavigation();
    return (
        <View style={styles.container}>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Title"
                />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Descreption"
                />
            </View>
            <TouchableHighlight onPress={() => { console.log("Task Added") }}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Add Task</Text>
                </View>
            </TouchableHighlight>
            <View style={styles.hr} />
            <View>
                <FlatList horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.actionList}
                    data={actions} keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <TouchableHighlight onPress={() => { console.log(item.action) }}>
                            <View style={styles.actionButton}>
                                <Text style={styles.actionButtonText}>{item.name}</Text>
                            </View>
                        </TouchableHighlight>
                    )} />
            </View>
            <View style={{ width: "90%" }}>
                <FlatList
                    data={tasks} keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <Pressable style={styles.taskView}
                            onPress={() => {
                                navigation.navigate('Details', { taskId: item.id, taskTitle: item.title });
                            }}>
                            <Text style={styles.taskText}>{item.title}</Text>
                            <View style={{ flexDirection: "row", gap: 4 }}>
                                <AntDesign name="checkcircleo" size={20} color="black" />
                                {(Platform.OS == "web" || Platform.OS == "android") ? (
                                    <Feather name="trash" size={20} color="red" />
                                ) : (
                                    <FontAwesome5 name="check-square" size={20} color="black" />
                                )
                                }
                            </View>
                        </Pressable>
                    )} />
            </View>
        </View >
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop: 30,
    },
    appHeader: {
        fontSize: 20,
        textTransform: "uppercase",
        color: "teal",
        fontWeight: "bold"
    }
    ,
    input: {
        borderRadius: 4,
        textAlign: "center",
        borderWidth: 1,
        borderColor: "#000",
        padding: 10,
    },
    inputContainer: {
        width: "90%",
        marginTop: 20,
    },
    button: {
        marginVertical: 30,
        width: 250,
        alignItems: 'center',
        backgroundColor: 'teal',
        borderRadius: 6,
    },
    actionList: {
        paddingHorizontal: 10,
        paddingVertical: 20,
    },
    actionButton: {
        marginHorizontal: 10,
        borderRadius: 6,
        paddingHorizontal: 15,
        paddingVertical: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: "#000",

    },
    actionButtonText: {
        color: "#000"
    },
    buttonText: {
        textAlign: 'center',
        padding: 10,
        color: 'white',
    },
    taskView: {
        flexDirection: "row",
        justifyContent: "space-between",
        textAlign: "center",
        padding: 7,
        borderRadius: 6,
        marginVertical: 7,
        borderColor: "teal",
        borderWidth: 1
    },
    hr: {
        borderBottomColor: "#ccc",
        borderBottomWidth: 2,
        marginVertical: 10,
        width: "80%"
    }
});

export default Home
