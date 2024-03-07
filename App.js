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
          <Stack.Screen name='Login' component={Login} 
          options={{
            header:()=><Text>Hello</Text>,
            headerRight:()=><Button title='Right'/>,
            title:"Login Page",
            headerTintColor:"green",
            headerStyle:{
              backgroundColor:"black"
            }
          }}/>
          <Stack.Screen name='Home' component={Home}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

const Home = ()=>{
  return (
    <View>
    </View>
  )
}
const Login = (props)=>{
  return(
    <View>
      <Button title='go to home page' onPress={()=>{props.navigation.navigate("Home")}}/>
    </View>
  )
}

export default App
