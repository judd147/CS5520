import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function GoalItem({ item }) {
  return (
    <View style={styles.textContainer}>
      <Text style={styles.text}>{item.text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    fontSize: 20,
    color: 'white',
    padding: 5,
    borderRadius: 10,
  },
  textContainer: {
    borderRadius: 10,
    backgroundColor: 'purple',
    marginTop: 10
  },
})