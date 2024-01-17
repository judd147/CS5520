import { StyleSheet, TextInput, Text, View } from 'react-native'
import React, { useState } from 'react'

export default function Input() {
  const [text, setText] = useState("");

  const handleTextChange = (changedText) => {
    console.log('User is typing.', changedText);
    setText(changedText);
  }
  return (
    <View>
      <TextInput 
        placeholder='Type something...'
        value={text}
        onChangeText={handleTextChange} />
    </View>
  )
}

const styles = StyleSheet.create({})