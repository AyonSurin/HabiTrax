// import { View, Text, StyleSheet } from "react-native";

// export default function MonthCalendar() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.habitTitle}>Habit</Text>
//       <View style={styles.subTextBox}>
//         <Text style={styles.subText}>Month</Text>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     marginTop: 30,
//     width: "100%",
//     height: 350,
//     borderRadius: 20,
//     borderWidth: 3,
//     borderColor: "black",
//     shadowRadius: 20,
//     shadowColor: "black",
//     shadowOpacity: 60,
//     shadowOffset: { width: 20, height: 30 },
//   },
//   habitTitle: {
//     fontWeight: "700",
//     fontSize: 35,
//     marginLeft: 15,
//   },
//   subTextBox: {},
//   subText: {
//     fontWeight: "600",
//     fontSize: 25,
//     textAlign: "center",
//   },
// });

import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function MonthCalendar() {
  // Array representing the days of the week
  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  // Array representing the calendar days, assuming the month starts on a Monday for simplicity
  // Adjust the `startDayIndex` to match the actual start day of the month
  const startDayIndex = 0; // Monday
  const daysInMonth = 30;
  const daysArray = Array.from({ length: startDayIndex }).concat(
    Array.from({ length: daysInMonth }, (_, i) => i + 1)
  );

  return (
    <View style={styles.container}>
      <Text style={styles.habitTitle}>Habit</Text>
      <Text style={styles.monthTitle}>Month 2024</Text>
      <View style={styles.calendarContainer}>
        <View style={styles.weekHeader}>
          {daysOfWeek.map((day, index) => (
            <Text key={index} style={styles.weekDay}>
              {day}
            </Text>
          ))}
        </View>
        <View style={styles.daysContainer}>
          {daysArray.map((day, index) => (
            <View
              key={index}
              style={[
                styles.dayBox,
                day ? styles.filledDayBox : styles.emptyDayBox,
              ]}
            >
              {day ? (
                <Text style={styles.dayText}>{`${day}`}</Text>
              ) : (
                <Text style={styles.dayText} />
              )}
            </View>
          ))}
        </View>
      </View>
      <Text style={styles.footerText}>16 days out of 21 days completed</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    padding: 15,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    backgroundColor: "#f5f5f5",
    elevation: 5,
  },
  habitTitle: {
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "left",
    marginBottom: 5,
  },
  monthTitle: {
    fontWeight: "600",
    fontSize: 20,
    textAlign: "center",
    marginBottom: 15,
  },
  calendarContainer: {
    width: "100%",
  },
  weekHeader: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
  },
  weekDay: {
    flex: 1,
    textAlign: "center",
    fontWeight: "600",
    fontSize: 16,
  },
  daysContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
  },
  dayBox: {
    width: "13%",
    aspectRatio: 1,
    margin: 2,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  filledDayBox: {
    backgroundColor: "black",
  },
  emptyDayBox: {
    backgroundColor: "transparent",
  },
  dayText: {
    color: "white",
    fontWeight: "600",
    fontSize: 20,
  },
  footerText: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: 16,
  },
});
