import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";

export default function YearlyCalendar() {
  const [loading, setLoading] = useState(true);
  const [daysArray, setDaysArray] = useState<boolean[]>([]);

  const totalDaysInYear = 365;
  const probabilityOfTrue = 0.4; // 40% chance of true

  useEffect(() => {
    // Simulate data loading with a delay
    setTimeout(() => {
      const filledDaysArray = Array.from(
        { length: totalDaysInYear },
        () => Math.random() < probabilityOfTrue
      );
      setDaysArray(filledDaysArray);
      setLoading(false); // Data has been loaded
    }, 2000); // Simulated delay of 2 seconds
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text style={styles.habitTitle}>Loading Habit Data...</Text>
        <View style={styles.calendarContainer}>
          <View style={styles.daysContainer}>
            {/* Skeleton loader - simple placeholder boxes */}
            {Array.from({ length: totalDaysInYear }).map((_, index) => (
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
      <Text style={styles.habitTitle}>Year</Text>
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
      <Text style={styles.footerText}>
        {daysArray.filter(Boolean).length} days out of {totalDaysInYear}{" "}
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
    width: "90%",
    height: "auto",
    marginBottom: 10,
  },
  habitTitle: {
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
    marginBottom: 10,
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
    left: 5,
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
  skeletonBox: {
    width: 17,
    height: 17,
    margin: 1,
    borderRadius: 4,
    backgroundColor: "#e0e0e0", // Gray color to indicate loading
  },
  footerText: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: 16,
    marginTop: 10,
  },
});
