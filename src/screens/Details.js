import { useRoute } from '@react-navigation/native'
import React from 'react'
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { StyleSheet, Text, View, Platform } from 'react-native';

const Details = () => {
    const { params } = useRoute()
    console.log(params)
    return (
        <View style={styles.container}>
            {
                params ? (

                    <View style={styles.taskView}>
                        <Text style={styles.taskText}>{params.taskTitle}</Text>
                        <View style={{ flexDirection: "row", gap: 4 }}>
                            <AntDesign name="checkcircleo" size={20} color="black" />
                            {(Platform.OS == "web" || Platform.OS == "android") ? (
                                <Feather name="trash" size={20} color="red" />
                            ) : (
                                <FontAwesome5 name="check-square" size={20} color="black" />
                            )
                            }
                        </View>
                    </View>
                ) : (<Text >Task Details</Text>)
            }
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop: 30,
    },
    taskView: {
        width: "80%",
        flexDirection: "row",
        justifyContent: "space-between",
        textAlign: "center",
        padding: 7,
        borderRadius: 6,
        marginVertical: 7,
        borderColor: "teal",
        borderWidth: 1
    },

});
export default Details
