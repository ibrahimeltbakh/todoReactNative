import { StyleSheet } from 'react-native';
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
        borderWidth: 1,
        borderColor: "orange",
    },
    taskDone: {
        fontSize: 20,
        color: "teal",
        textDecorationLine: 'line-through',
    },
    taskInprogress: {
        fontSize: 20,
        color: "orange",
        textDecorationLine: 'none',
    },

    hr: {
        borderBottomColor: "#ccc",
        borderBottomWidth: 2,
        marginVertical: 10,
        width: "80%"
    }
});
export default styles;