import { View, Text, StyleSheet } from "react-native";
import Habit from "@/components/habit";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.title_box}>
        <Text style={styles.title}>Today</Text>
      </View>
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
