import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home'
import GoalDetails from './components/GoalDetails'

const Stack = createNativeStackNavigator();
const options={
  headerShown: true,
  headerTitle: 'All My Goals',
  headerTintColor: 'white',
  headerStyle: { backgroundColor: 'magenta' },
  }

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={options}>
        <Stack.Screen name="Home" component={Home} 
          />
        <Stack.Screen name="Details" component={GoalDetails} 
          options={({ route }) => {
            return { headerTitle: route.params.text }
          }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}