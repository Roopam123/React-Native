import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator();
export class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name='login' component={Login}/>
          <Tab.Screen name='signup' component={SignUp}/>
        </Tab.Navigator>
      </NavigationContainer>
    )
  }
}

const Login = ()=>{
  return(
    <View>
    <Text>Login</Text>
    </View>
  )
}

const SignUp = ()=>{
  return(
    <View>
      <Text>SignUp</Text>
    </View>
  )
}
export default App
