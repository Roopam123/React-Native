import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    main:{
        height:1000,
        width:400,
        backgroundColor:"black",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        gap:40,
        backgroundColor:"white",
        position:"relative",
        top:-200
    },
    heading:{
        color:"black",
        fontSize:30,
        fontWeight:"700",
        position:"relative",
        left:-20
    },
    usernameSection:{
        display:"flex",
        flexDirection:"column",
        gap:10
    },
    userheading:{
        display:"flex",
        color:"black",
        textAlign:"left",
        fontSize:25
    },
    userinput:{
        color:"black",
        borderWidth:1,
        borderColor:"black",
        width:200,
        borderTopRightRadius:10,
        borderBottomLeftRadius:10
    },
    form:{
        display:"flex",
        gap:10
    },
    btn:{
        display:"flex",
        justifyContent:"space-between",
        flexDirection:"row",
        gap:20,
    }

});

export default styles;