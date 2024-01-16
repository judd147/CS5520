import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';
import Header from './components/Header'

export default function App() {
  const appName = 'Demo App';
  const [text, setText] = useState("");

  const handleTextChange = (changedText) => {
    console.log('User is typing.', changedText);
    setText(changedText);
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header name={appName} version={2}/>
      <TextInput 
        placeholder='Type something...'
        value={text}
        onChangeText={handleTextChange}/> 
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
