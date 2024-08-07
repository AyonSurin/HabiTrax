import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

export default function YearlyCalendar() {
  // Total number of days in a year
  const totalDaysInYear = 365;
  const batchSize = 50;

  // Array representing the calendar days
  const [daysArray, setDaysArray] = useState<number[]>([]);
  const [loadedDays, setLoadedDays] = useState(0);
  //   const daysArray = Array.from({ length: totalDaysInYear }, (_, i) => i + 1);

  useEffect(() => {
    if (loadedDays < totalDaysInYear) {
      const loadMoreDays = () => {
        const newLoadedDays: number = Math.min(
          loadedDays + batchSize,
          totalDaysInYear
        );
        const newDaysArray = Array.from(
          { length: newLoadedDays },
          (_, i) => i + 1
        );
        setDaysArray(newDaysArray);
        setLoadedDays(newLoadedDays);
      };
      loadMoreDays();
    }
  }, [loadedDays]);

  return (
    <View style={styles.container}>
      <Text style={styles.habitTitle}>Habit</Text>
      <View style={styles.calendarContainer}>
        <View style={styles.daysContainer}>
          {daysArray.map((day, index) => (
            <View
              key={index}
              style={[
                styles.dayBox,
                day ? styles.filledDayBox : styles.emptyDayBox,
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
    backgroundColor: "black",
  },
  emptyDayBox: {
    backgroundColor: "transparent",
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
