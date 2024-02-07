import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function GoalDetails({ route }) {
  return (
    <View>
      <Text>{route.params.id} {route.params.text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})