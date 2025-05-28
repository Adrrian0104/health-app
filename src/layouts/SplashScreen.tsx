import React, { useEffect, useState } from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import LoginScreen from "./LoginScreen";

export default function SplashScreen() {
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogin(true);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, []);

  if (showLogin) {
    return <LoginScreen />;
  }

  return (
    <View style={styles.container}>
      <Image source={require("../assets/logo.png")} style={styles.logo} />
      <Text style={styles.text}>Bienvenido </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4A90E2", // Fondo azul claro
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 300, // Ajusta el tamaño según tu diseño
    height: 300,
    resizeMode: "contain",
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    color: "#fff", // Texto blanco
    fontWeight: "bold",
  },
});
