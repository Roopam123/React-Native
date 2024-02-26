import React from 'react';
import {View,Text,ScrollView} from 'react-native';
import data from './data.json'

const App = () => {
  return (
    <ScrollView>
      {data.map((item,index)=>(
        <View key={index} style={{backgroundColor:"green",marginBottom:3}}>
          <Text style={{color:"red"}}>{item.name}</Text>
          <Text>{item.email}</Text>
          <Text>{item.phone}</Text>
          <Text>{item.address}</Text>
        </View>
      ))}
    </ScrollView>
  )
}

export default App
