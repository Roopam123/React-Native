import React, { Component } from 'react'
import { Button, Text, View } from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from "@react-navigation/stack"

const Stack = createStackNavigator();

export class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='login' component={Login}/>
          <Stack.Screen name='home' component={Home}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

const Home = ()=>{
  return (
    <View>
      <Text>Home</Text>
    </View>
  )
}
const Login = (props)=>{
  return(
    <View>
      <Text>Login</Text>
      <Button title='go to home page' onPress={()=>{props.navigation.navigate("home")}}/>
    </View>
  )
}

export default App
