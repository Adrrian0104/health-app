import React, { useState } from "react";
import { supabase } from "../supabaseClient";
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from "react-native";

export default function RegisterScreen({ onClose }: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");

  // Validar formato de correo electrónico
  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleRegister = async () => {
    if (!email || !password || !fullName || !phone) {
      Alert.alert("Error", "Todos los campos son obligatorios");
      return;
    }

    if (!isValidEmail(email)) {
      Alert.alert("Error", "Por favor ingresa un correo electrónico válido");
      return;
    }

    try {
      // Verificar si el usuario ya existe en la tabla personalizada `users`
      const { data: existingUser, error: fetchError } = await supabase
        .from("users")
        .select("id")
        .eq("email", email)
        .single();

      if (fetchError && fetchError.code !== "PGRST116") {
        throw fetchError;
      }

      if (existingUser) {
        Alert.alert("Error", "El usuario ya está registrado");
        return;
      }

      // Crear un nuevo usuario en Supabase Auth
      const { error: signUpError } = await supabase.auth.signUp({
        email,
        password,
      });

      if (signUpError) {
        throw signUpError;
      }

      // Guardar información adicional en la tabla personalizada `users`
      const { error: insertError } = await supabase.from("users").insert([
        {
          email,
          full_name: fullName,
          phone,
        },
      ]);

      if (insertError) {
        throw insertError;
      }

      Alert.alert("Éxito", "Usuario registrado correctamente");
      onClose(); // Volver al inicio de sesión o pantalla previa
    } catch (error: any) {
      Alert.alert("Error", error.message || "Algo salió mal");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign up</Text>
      <TextInput
        style={styles.input}
        placeholder="admin@mail.com"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="*********"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Your fullname"
        value={fullName}
        onChangeText={setFullName}
      />
      <TextInput
        style={styles.input}
        placeholder="(+57) 000000000"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
      />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onClose}>
        <Text style={styles.link}>Back to login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#31e7ed",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "80%",
    padding: 10,
    marginVertical: 10,
    backgroundColor: "white",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  button: {
    marginTop: 20,
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
  link: {
    marginTop: 10,
    color: "blue",
    textDecorationLine: "underline",
  },
});
