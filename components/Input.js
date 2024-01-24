import { Button, StyleSheet, TextInput, Modal, View } from 'react-native'
import React, { useState } from 'react'

export default function Input({ inputHandler, modalVisible }) {
  const [text, setText] = useState("");

  const handleTextChange = (changedText) => {
    console.log('User is typing.', changedText);
    setText(changedText);
  }

  const confirmHandler = () => {
    inputHandler(text);
    setText("");
  }

  const cancelHandler = () => {
    inputHandler("");
    setText("");
  }

  return (
    <Modal visible={modalVisible} animationType="slide">
      <View style={styles.container}>
        <TextInput style={styles.input}
          placeholder='Type something...'
          value={text}
          onChangeText={handleTextChange} />
        <View style={styles.button}>
          <Button title='Confirm' onPress={confirmHandler}/>
          <Button title='Cancel' onPress={cancelHandler}/>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: 'darkmagenta',
    width: '50%'
  },
  button: {
    flexDirection: 'row'
  }
});