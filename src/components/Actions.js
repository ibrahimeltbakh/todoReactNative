import React, { useEffect, useState } from 'react'
import styles from '../Styles/styles';
import TodosList from './TodosList';
import { Text, View, FlatList, TouchableHighlight } from 'react-native';
import { useSelector } from 'react-redux';
const Actions = () => {
    const todos = useSelector((state) => state.todos);
    const [filter, setFilter] = useState("all");

    const handelFilterd = () => {
        if (filter === "all") {
            return todos;
        }
        if (filter === "inprogress") {
            return todos.filter(todo => !todo.isDone);
        }
        if (filter === "done") {
            return todos.filter(todo => todo.isDone);
        }
    }


    const actions = [
        { id: "1", name: "All", action: () => { setFilter("all") } },
        { id: "2", name: "In Progress", action: () => { setFilter("inprogress") } },
        { id: "3", name: "Done", action: () => { setFilter("done") } },
    ]
    return (
        <>
            <View style={styles.hr} />
            <View>
                <FlatList horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.actionList}
                    data={actions} keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <TouchableHighlight onPress={() => { item.action() }}>
                            <View style={styles.actionButton}>
                                <Text style={styles.actionButtonText}>{item.name}</Text>
                            </View>
                        </TouchableHighlight>
                    )} />
            </View>
            <View style={{ flex: 1, width: "90%" }}>
                <TodosList todos={handelFilterd()} />
            </View>
        </>
    )
}

export default Actions
