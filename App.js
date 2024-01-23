import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import Header from './components/Header'
import Input from './components/Input'
import React, { useState } from 'react'

export default function App() {
  const appName = 'Demo App';
  const [text, setText] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  function inputHandler(data) {
    console.log("You typed:", data);
    setText(data);
    setModalVisible(false);
  }

  function showModal() {
    setModalVisible(true);
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header name={appName} version={2}/>
      <Button title='Add a Goal' onPress={showModal}/>
      <Input inputHandler={inputHandler} modalVisible={modalVisible}/>
      <Text>{text}</Text>
    </View>
    // handleTextChange takes in an onChangeText behind the scenes and we call setText to update the text state
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {

  }
});
