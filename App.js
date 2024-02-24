import React, { useState } from 'react';
import {View,Text,TextInput,Button} from 'react-native';
import styles from './AppStyle';

const App = () => {
  const [name,setName] = useState("");
  const [password,setPassword] = useState("");
  const [displayName,setDisplayName] = useState("");
  const [displayPassword,setDisplayPassword] = useState("")
  const handelOnSignUp = ()=>{
    setDisplayName(name),
    setName(""),
    setPassword(""),
    setDisplayPassword(password)
  };
  const hadelClear = ()=>{
    setDisplayName("")
    setDisplayPassword("")
  }
  return (
    <View style={styles.main}>
      <Text style={styles.heading}>Sing Up</Text>
      <Text>username:{displayName},Password:{displayPassword}</Text>
      <View style={styles.form}>
      <View style={styles.usernameSection}>
        <Text style={styles.userheading}>Username</Text>
        <TextInput style={styles.userinput} onChangeText={(text)=>setName(text)} value={name}/>
      </View>
      <View style={styles.usernameSection}>
        <Text style={styles.userheading}>Password</Text>
        <TextInput style={styles.userinput} secureTextEntry={true} onChangeText={(text)=>setPassword(text)} value={password}/>
      </View>
      </View>
      <View style={styles.btn}>
      <Button title='Sign Up' style={styles.btn} onPress={handelOnSignUp}/>
      <Button title='Clear' style={styles.btn} onPress={hadelClear}/>
      </View>
    </View>
  )
}

export default App
