import { View, Text,ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'

const App = () => {
  const [data,setData] = useState([]);

  useEffect(()=>{
    getApiData();
  },[])

  const getApiData = async ()=>{
    try {
      const url = "https://jsonplaceholder.typicode.com/posts";
      let fetchData = await fetch(url);
      let apiData = await fetchData.json();
      if (apiData) {
        setData(apiData)
      }
    } catch (error) {
      console.warn("Error on the api call function",error)
    }
  }
  return (
    <ScrollView>
      <Text style={{textAlign:"center",fontSize:25,color:"green"}}>API Data</Text>
      {data.map((ele,i)=>
      <View key={i} style={{backgroundColor:"#ccc",borderWidth:1,borderColor:"red",padding:20,margin:10}}>
        <Text>Id: - {ele.id}</Text>
        <Text>Title: - {ele.title}</Text>
        <Text>Body: - {ele.body}</Text>
      </View>)}
    </ScrollView>
  )
}

export default App