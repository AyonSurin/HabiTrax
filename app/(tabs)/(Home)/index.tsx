import { View, Text, StyleSheet } from "react-native";
import Habit from "@/components/habit";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Habit />
      <Habit />
      <Habit />
      <Habit />
      <Habit />
      <Habit />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
