import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";
import { auth } from "@/constants/firebase";
import { onAuthStateChanged } from "firebase/auth";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const WelcomeScreen = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true); // Loading state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, redirect to home screen
        router.replace("/(tabs)"); // Change this to your main screen path
      } else {
        // User is not signed in, stay on WelcomeScreen
        console.log("No user signed in");
      }
      setLoading(false); // Set loading to false when auth state is determined
      SplashScreen.hideAsync();
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  return loading ? null : (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/navbar_logo.png")}
        style={styles.logo}
      />
      <Text style={styles.welcomeText}>Welcome to HabiTrax</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.replace("/(signup)")}
        >
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.replace("/(login)")}
        >
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
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
  button: {
    backgroundColor: "#000000",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default WelcomeScreen;
