import { View, Text, StyleSheet, ScrollView } from "react-native";
import NavBar from "@/components/NavBar";
import WeekCalendar from "@/components/calendar/WeeklyCalendar";
import HabitDesc from "@/components/HabitDesc";

export default function Month() {
  return (
    <View style={styles.container}>
      <NavBar />
      <View style={styles.title_box}>
        <Text style={styles.title}>Weekly</Text>
      </View>
      <HabitDesc />
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
  scrollContainer: {
    // marginBottom: 110,
  },
});
