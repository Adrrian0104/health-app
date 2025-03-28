import { useNavigation, useRootNavigationState } from "expo-router";
import { View, Text, TextInput, StyleSheet, Alert,TouchableOpacity, Button } from "react-native";
import { useEffect } from "react";

export default function LoginScreen(){
    const navigation = useNavigation();
    useEffect(()=> {
      navigation.setOptions({headerShown: false});
    },[navigation]);
  
    return (
        <View style={styles.container}>
          <Text style={styles.title}>Sign in </Text>
          <TextInput 
          style={styles.input}
          placeholder="admin@gmail.com"/>

          <TextInput 
          style={styles.input}
          placeholder="********"
          secureTextEntry/>


          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}> Login</Text>

          </TouchableOpacity>
        </View>
      );
    }
    const styles = StyleSheet.create({
      container: {
        flex : 1,
        justifyContent:"center",
        alignItems: "center",
        backgroundColor:"#95a5a6 "
      },
      title:{
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20

      },
      input:{
        width: "80%",
        padding: 10,
        marginVertical: 10,
        backgroundColor: "white",
        borderRadius: 5,
        borderWidth: 1,
        borderColor:"#CCC"

      },
      button:{
        marginTop: 20,
        backgroundColor: "#007e80",
        padding: 10,
        borderRadius: 5,
        width: "80%",
        alignItems: "center"
      },
      buttontext:{
        color: "white",
        fontSize: 14,
        fontWeight: "bold"
      },
    });