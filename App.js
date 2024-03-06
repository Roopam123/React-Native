import { View, Text,StatusBar } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View>
      <StatusBar 
      backgroundColor="green"
      barStyle="light-content"
      hidden={false}
      />
    </View>
  )
}

export default App