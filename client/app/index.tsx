import React from "react";
import { View, Text, Button, Image, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

const WelcomeScreen = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/fire_icon.png")}
        style={styles.logo}
      />
      <Text style={styles.welcomeText}>Welcome to Your App</Text>
      <View style={styles.buttonContainer}>
        <Button title="Sign In" onPress={() => router.replace("/(login)")} />
        <Button title="Sign Up" onPress={() => router.replace("/(signup)")} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 24,
    marginBottom: 40,
  },
  buttonContainer: {
    width: "80%",
    justifyContent: "space-around",
    marginTop: 20,
  },
});

export default WelcomeScreen;
