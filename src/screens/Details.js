import { useRoute } from '@react-navigation/native'
import React from 'react'
import styles from '../Styles/styles';
import { Text, View } from 'react-native';

const Details = () => {
    const { params } = useRoute();
    const cardBackgroundColor = params && params.isDone ? 'teal' : '#f48924';
    return (
        <View style={styles.taskDetailsContainer}>
            {params ? (
                <View style={[styles.taskDetails, { backgroundColor: cardBackgroundColor }]}>
                    <Text style={styles.taskTitle}>{params.title}</Text>
                    <Text style={styles.taskDescription}>{params.description}</Text>
                    <Text style={styles.taskStatus}>
                        {params.isDone ? "✔ Completed" : "⏳ In Progress"}
                    </Text>
                </View>
            ) : (
                <Text style={styles.noTaskText}>
                    Please select a task to view its details.
                </Text>
            )}
        </View>
    );
};

export default Details
