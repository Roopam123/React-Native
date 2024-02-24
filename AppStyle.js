import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    box:{
        display:"flex",
        justifyContent:"center",
        alignContent:"center",
        backgroundColor:'green',
        height:1000,
        width:500,
        textAlign:"center",
        paddingLeft:10,
    },
    name:{
        fontWeight:"900",
        fontSize:30,
        color:"white"
    },
    input:{
        borderColor:"white",
        borderWidth:2,
        width:300
    }
})

export default styles;