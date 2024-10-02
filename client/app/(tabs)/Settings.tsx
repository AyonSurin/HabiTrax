import React from "react";
import { View, Text, StyleSheet, Alert, TouchableOpacity } from "react-native";
import { auth } from "@/constants/firebase"; // Your firebase auth instance
import { signOut } from "firebase/auth";
import { useRouter } from "expo-router";

export default function Settings() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.replace("/"); // Redirect to login screen after logout
    } catch (error: any) {
      Alert.alert("Logout Error", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.title_box}>
        <Text style={styles.title}>Settings</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 50,
  },
  title: {
    fontSize: 35,
    fontWeight: "800",
  },
  title_box: {
    width: "100%",
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: "#000000",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
});
