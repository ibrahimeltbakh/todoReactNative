import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: "100%",
        height: "100%",
    },
    container: {
        flex: 1,
        // backgroundColor: '#eee',
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
    taskDetailsContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        padding: 20,
    },
    taskDetails: {
        width: '90%',
        padding: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,

    },
    taskTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 10,
        textAlign: "center"
    },
    taskDescription: {
        fontSize: 16,
        color: '#fff',
        marginBottom: 20,
        textAlign: "center"
    },
    taskStatus: {
        fontSize: 14,
        fontWeight: '600',
        color: '#fff',
        textAlign: 'right',

    },
    noTaskText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#666",
        textAlign: "center",
        marginTop: 20,
        padding: 10,
        backgroundColor: "#fff",
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    hr: {
        borderBottomColor: "#ccc",
        borderBottomWidth: 2,
        marginVertical: 10,
        width: "80%"
    }
});
export default styles;