import React from 'react';
import {View,Text,SectionList} from 'react-native';

const user = [
  {
    id:1,
    name:"Roopam",
    data:["Python","C++","java"]
  },{
    id:2,
    name:"nidhi",
    data:["Python","C++","java"]
  },{
    id:3,
    name:"Nitin",
    data:["Python","C++","java"]
  },
  {
    id:4,
    name:"Devensh",
    data:["Python","C++","java"]
  },
]

const App = () => {
  return (
    <View>
      {/* <Text>Roopam</Text> */}
      <SectionList 
      sections={user} 
      renderItem={({item})=><Text>{item}</Text>}
      renderSectionHeader={({section:{name}})=><Text style={{fontSize:20,color:"green"}}>{name}</Text>}/>
    </View>
  )
}

export default App;
