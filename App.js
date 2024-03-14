import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import React, { useState,useRef } from 'react';

const App = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const nameInfo = useRef();

  const submitForm = (e) => {
    e.preventDefault()
    console.warn(name, lastName, password);
    nameInfo.current.focus();
    nameInfo.current.setNativeProps({
      fontSize:20,
      color:"green"
    })
    setName("")
    setLastName("")
    setPassword("")
  }

  return (
    <View style={styles.main}>
      <Text style={styles.mainText}>App Form</Text>
      <TextInput
        style={styles.input}
        value={name}
        ref={nameInfo}
        onChangeText={text => setName(text)}
        placeholder='Enter Your Name'
      />
      <TextInput
        style={styles.input}
        value={lastName}
        onChangeText={text => setLastName(text)}
        placeholder='Enter Your Last Name'
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry={true}
        placeholder='Enter Your Password'
      />
      <Button title='Submit' onPress={submitForm}/>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // React Native does not support gap in StyleSheet. You will need to add margins to individual elements or use other layout views.
  },
  mainText: {
    fontSize: 30,
    fontWeight: "800",
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    width: "90%",
    color: "black",
    paddingLeft: 20,
    height: 40,
    borderRadius: 10,
    marginTop: 20, // Added to separate inputs and button
  },
  btn:{
    marginTop:30
  }
});

export default App;
