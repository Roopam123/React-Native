import { View, Text,Platform } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View>
      <Text>My Platform:{Platform.OS}</Text>
      <Text>Version:{Platform.Version}</Text>
    </View>
  )
}

export default App