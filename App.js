import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, ScrollView, View, FlatList, TextInput, TouchableHighlight } from 'react-native';

export default function App() {
  const actions = [
    { id: "1", name: "All", action: "All" },
    { id: "2", name: "In Progress", action: "In Progress" },
    { id: "3", name: "Done", action: "done" },
  ]
  const tasks = [
    { id: 1, title: "Task 1", complete: false },
    { id: 2, title: "Task 2", complete: false },
  ]
  return (

    <View style={styles.container}>
      <Text style={styles.appHeader}>Todo app</Text>
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
            <View style={styles.taskView}>
              <Text style={styles.taskText}>{item.title}</Text>
            </View>
          )} />
      </View>
    </View >
  );
}
const styles = StyleSheet.create({
  container: {
    width: "80%",
    maxWidth: 800,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 30,
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
