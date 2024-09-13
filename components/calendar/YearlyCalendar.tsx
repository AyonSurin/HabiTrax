import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function YearlyCalendar() {
  // Total number of days in a year
  const totalDaysInYear = 365;
  const filledDays = 280;

  // Array representing the calendar days
  const probabilityOfTrue = 0.4; // 40% chance of true
  const daysArray = Array.from(
    { length: totalDaysInYear },
    () => Math.random() < probabilityOfTrue
  );

  return (
    <View style={styles.container}>
      <Text style={styles.habitTitle}>Habit</Text>
      <View style={styles.calendarContainer}>
        <View style={styles.daysContainer}>
          {daysArray.map((isFilled, index) => (
            <View
              key={index}
              style={[
                styles.dayBox,
                isFilled ? styles.filledDayBox : styles.emptyDayBox,
              ]}
            >
              <Text style={styles.dayText}>{""}</Text>
            </View>
          ))}
        </View>
      </View>
      <Text style={styles.footerText}>280 days out of 365 completed</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    padding: 15,
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 10,
    backgroundColor: "#f5f5f5",
    elevation: 5,
    width: "98%",
    left: 4,
  },
  habitTitle: {
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "left",
    marginBottom: 5,
  },
  calendarContainer: {
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  daysContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
  },
  dayBox: {
    width: 17,
    height: 17,
    margin: 1,
    borderRadius: 4,
    justifyContent: "flex-start",
    alignItems: "center",
    elevation: 2,
  },
  filledDayBox: {
    backgroundColor: "#8B4CFF",
  },
  emptyDayBox: {
    backgroundColor: "#DECCFF",
  },
  dayText: {
    color: "white",
    fontWeight: "600",
    fontSize: 8,
  },
  footerText: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: 16,
    marginTop: 10,
  },
});
