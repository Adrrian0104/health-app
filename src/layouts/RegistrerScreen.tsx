import React, {useState} from "react";
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from "react-native";

export default function RegisterScreen( {onClose}){
    return(
        <View>
            <Text>Sing up</Text>
            <TouchableOpacity onPress={onClose}>
                <Text> Back to Login</Text>
            </TouchableOpacity>
        </View>
    )
}