import { View, Text, StyleSheet, ScrollView } from "react-native";
import NavBar from "@/components/NavBar";
import WeekCalendar from "@/components/calendar/WeeklyCalendar";
import HabitDesc from "@/components/HabitDesc";
import YearlyCalendar from "@/components/calendar/YearlyCalendar";
import ToggleComponent from "@/components/OptionSelector";

export default function Month() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <NavBar />
        <View style={styles.title_box}>
          <Text style={styles.title}>Weekly</Text>
        </View>
        <HabitDesc />
        <ToggleComponent />
      </View>
    </ScrollView>
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
