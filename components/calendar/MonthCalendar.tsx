import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

export default function MonthCalendar() {
  const [loading, setLoading] = useState(true);
  const [daysArray, setDaysArray] = useState<(number | null)[]>([]);
  const totalDaysInMonth = 30;
  const probabilityOfTrue = 0.4; // 40% chance of true

  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  useEffect(() => {
    // Simulate data loading with a delay
    setTimeout(() => {
      const filledDaysArray = Array.from(
        { length: totalDaysInMonth },
        (_, index) => (Math.random() < probabilityOfTrue ? index + 1 : null)
      );
      // setDaysArray(filledDaysArray);
      setDaysArray(filledDaysArray);
      setLoading(false); // Data has been loaded
    }, 500); // Simulated delay of 0.5 seconds
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text style={styles.monthTitle}>Loading Month Data...</Text>
        <View style={styles.calendarContainer}>
          <View style={styles.daysContainer}>
            {/* Skeleton loader - simple placeholder boxes */}
            {Array.from({ length: totalDaysInMonth }).map((_, index) => (
              <View key={index} style={styles.skeletonBox}></View>
            ))}
          </View>
        </View>
        <Text style={styles.footerText}>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.monthTitle}>Month</Text>
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
                <Text style={styles.emptyDayText}>{`${index + 1}`}</Text>
              )}
            </View>
          ))}
        </View>
      </View>
      <Text style={styles.footerText}>
        {daysArray.filter(Boolean).length} days out of {totalDaysInMonth}{" "}
        completed
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    padding: 15,
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 30,
    backgroundColor: "#f5f5f5",
    elevation: 5,
  },
  monthTitle: {
    fontWeight: "600",
    fontSize: 25,
    textAlign: "center",
    marginBottom: 5,
  },
  calendarContainer: {
    width: "93%",
  },
  weekHeader: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
    left: 10,
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
    left: 10,
  },
  dayBox: {
    width: "10%",
    height: "10%",
    aspectRatio: 1,
    margin: 6.995,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
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
    fontSize: 17,
  },
  emptyDayText: {
    color: "black",
    fontWeight: "600",
    fontSize: 17,
  },
  skeletonBox: {
    width: "10%",
    height: "10%",
    aspectRatio: 1,
    margin: 6.995,
    borderRadius: 10,
    backgroundColor: "#e0e0e0", // Gray color to indicate loading
    justifyContent: "center",
    alignItems: "center",
  },
  footerText: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: 16,
    marginTop: 10,
  },
});
