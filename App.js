import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import React, { useState, useRef } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const nameInfo = useRef(null);

  const submitForm = async () => {
    nameInfo.current?.focus();
    await AsyncStorage.setItem("name", name);
    await AsyncStorage.setItem("lastName", lastName);
    // Resetting the form fields after submission
    setName("");
    setLastName("");
    setPassword("");
    // Fetching and displaying the data right after storing it
    await getData();
  };

  const getData = async () => {
    const storedName = await AsyncStorage.getItem("name");
    const storedLastName = await AsyncStorage.getItem("lastName");
    // Console.log to see the stored values
    console.warn(storedName, storedLastName);
  };

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
      <Button title='Submit' onPress={submitForm} />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
    marginTop: 20,
  },
  // btn style was not used in your original snippet, so it's safe to remove it if not needed
});

export default App;
