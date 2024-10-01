import React from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";
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
      <Button title="Logout" onPress={handleLogout} />
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
});
