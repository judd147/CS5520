import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header'
import Input from './components/Input'

export default function App() {
  const appName = 'Demo App';

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header name={appName} version={2}/>
      <Input />
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
