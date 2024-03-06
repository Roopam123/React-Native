import { View, Text,Modal, TouchableHighlight,StyleSheet } from 'react-native'
import React, { useState } from 'react'

const App = () => {
  const [modal,setModal] = useState(false)
  return (
    <View style={styles.main}>
      {/* Modal basically take a three value 1.transparent={true} 2. visible={true} 3.  animationType='slide'*/}
      <Modal transparent={true}
            visible={modal}
            animationType='slide'
      >
        <View style={styles.modal}>
        <View>
          <Text style={styles.modalText}>Hello! Roopam</Text>
        </View>
        </View>
      </Modal>
      <TouchableHighlight style={styles.btn} onPress={()=>setModal(false)}>
        <Text style={styles.btnText}>Show Modal</Text>
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  main:{
    flex:1,
    alignItems:"center",
    justifyContent:"flex-end"
  },
  btn:{
    backgroundColor:"black",
    width:"90%",
    marginBottom:20,
    padding:15,
    borderRadius:10
  },
  btnText:{
    color:"white",
    textAlign:"center",
    fontWeight:"700",
    fontSize:20
  },
  modal:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"gray",
    flex:.9
  }
})

export default App