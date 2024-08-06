import { View, Text, StyleSheet, StatusBar, ScrollView } from "react-native";
import Habit from "@/components/habit";
import NavBar from "@/components/NavBar";

export default function HomeScreen() {
  StatusBar.setBarStyle("dark-content");
  StatusBar.setBackgroundColor("#f2f2f2");
  return (
    <View style={styles.container}>
      <NavBar />
      <View style={styles.title_box}>
        <Text style={styles.title}>Today</Text>
      </View>
      <ScrollView style={{ width: "100%" }}>
        <Habit />
        <Habit />
        <Habit />
        <Habit />
        <Habit />
        <Habit />
      </ScrollView>
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
