import { View, Text, StyleSheet, ScrollView } from "react-native";
import NavBar from "@/components/NavBar";
import MonthCalendar from "@/components/calendar/MonthCalendar";

export default function Month() {
  return (
    <View style={styles.container}>
      <NavBar />
      <View style={styles.title_box}>
        <Text style={styles.title}>Monthly</Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollContainer}
      >
        <MonthCalendar />
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
  scrollContainer: {
    // marginBottom: 110,
  },
});
