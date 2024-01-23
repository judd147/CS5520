import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Header({ name, version}) {
  return (
    <View>
      <Text style={styles.header}>Welcome to {name}!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    color: "darkmagenta",
    fontSize: 20,
    borderColor: "darkmagenta",
    borderWidth: 2,
    borderRadius: 5,
    padding: 5
  }
});