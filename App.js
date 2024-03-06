import { View, Text,Pressable,StyleSheet } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={styles.main}>
      <Pressable  
      // onPress={()=>{console.warn("on Press")}}
      // onLongPress={()=>{console.warn("On Long Press")}}
      onPressIn={()=>console.warn("On press in")}
      onPressOut={()=>console.warn("On press out")}
      style={styles.pressable}>
        <Text style={styles.btn}>Button</Text>
      </Pressable>
    </View>
  )
}
const styles = StyleSheet.create({
  main:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
  },
  pressable:{
    backgroundColor:"black",
    width:200,
    padding:10,
    borderRadius:20,
    shadowColor:"red",
    elevation:1
  },
  btn:{
    textAlign:"center",
    fontSize:20,
    color:"white",
    fontWeight:"800"
  }
})

export default App;