import { View, Text, StyleSheet, ScrollView } from "react-native";
import NavBar from "@/components/NavBar";
import YearlyCalendar from "@/components/calendar/YearlyCalendar";

export default function Month() {
  return (
    <View style={styles.container}>
      <NavBar />
      <View style={styles.title_box}>
        <Text style={styles.title}>Year</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <YearlyCalendar />
        <YearlyCalendar />
        <YearlyCalendar />
        <YearlyCalendar />
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
