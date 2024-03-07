import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from './Home.Style';


export class Home extends Component {
  render() {
    return (
      <View style={styles.main}>
        <Text style={styles.home}>Home</Text>
      </View>
    )
  }
}

export default Home
