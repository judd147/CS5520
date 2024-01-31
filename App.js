import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  Button,
  SafeAreaView,
  FlatList,
} from "react-native";
import Header from "./components/Header";
import { useState } from "react";
import Input from "./components/Input";
import GoalItem from "./components/GoalItem"

export default function App() {
  const appName = "My awesome app";
  //const [text, setText] = useState("");
  const [goals, setGoals] = useState([{}]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  function receiveInput(data) {
    console.log("recieve input ", data);
    const newGoal = {text: data, id: Math.random()}
    setGoals([...goals, newGoal]);
    setIsModalVisible(false);
  }
  function dismissModal() {
    setIsModalVisible(false);
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topView}>
        <StatusBar style="auto" />

        <Header name={appName} version={2} />
        <Button title="Add a goal" onPress={() => setIsModalVisible(true)} />
        <Input
          inputHandler={receiveInput}
          modalVisible={isModalVisible}
          dismissModal={dismissModal}
        />
      </View>
      <View style={styles.bottomView}>
        <FlatList
          data={goals} renderItem={({ item }) =>
          <GoalItem item={item}/> } />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    // alignItems: "center",
    justifyContent: "center",
  },
  topView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  bottomView: { flex: 4, backgroundColor: "lightpink" },
});