import { router } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  StyleSheet,
} from "react-native";
import axios from "axios";

export default function SignInScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [error, setError] = useState("");

  const togglePasswordVisibility = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/login",
        {
          email,
          password,
        }
      );
      console.log("User logged in:", response.data);
      router.replace("/(tabs)"); // Redirect to tabs on success
    } catch (err: any) {
      const error = err.response?.data?.message || "An error occurred";
      setError(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sign In</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={secureTextEntry}
        />
        <TouchableOpacity onPress={togglePasswordVisibility}>
          <Text style={styles.toggleText}>{secureTextEntry ? "👁️" : "🙈"}</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.forgotbtn}
        onPress={() => router.replace("/")}
      >
        <Text style={styles.forgotTxt}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    marginTop: 50,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  infoText: {
    color: "#666",
    fontSize: 12,
    marginBottom: 10,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  passwordInput: {
    flex: 1,
    marginRight: 10, // Provides space between the input and the toggle icon
  },
  toggleText: {
    fontSize: 18,
  },
  termsText: {
    fontSize: 12,
    color: "#666",
    textAlign: "center",
    marginBottom: 20,
  },
  linkText: {
    color: "#4d90fe",
  },
  button: {
    backgroundColor: "#7e49ff",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  forgotbtn: {
    backgroundColor: "#f1f5f9",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 10,
  },

  forgotTxt: {
    color: "#8553ff",
    fontWeight: "bold",
  },
});
