import React, { useState } from 'react';
import {View,Text, TextInput, Button } from 'react-native';
import styles from './AppStyle';

const App = () => {
  const [name,setName] = useState("")
  const handelOnPress = () =>{
    setName("Hello Roopam")
  }
  return (
    <View style={styles.box}>
      <Text style={styles.name}>Your Name:{name}</Text>
      <TextInput style={styles.input} onChangeText={(text)=>setName(text)} placeholder='Enter Your Name' value={name}/>
      <Button title='submit' onPress={()=>setName("")}/>
    </View>
  )
}

export default App
