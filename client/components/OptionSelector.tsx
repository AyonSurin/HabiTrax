import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import YearlyCalendar from "./calendar/YearlyCalendar";
import MonthlyCalendar from "./calendar/MonthCalendar"; // Your MonthlyCalendar component

export default function ToggleComponent() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <View style={styles.container}>
      {/* Toggle Buttons */}
      <View style={styles.toggleContainer}>
        <TouchableOpacity
          style={[
            styles.toggleButton,
            isYearly ? styles.inactiveButton : styles.activeButton,
          ]}
          onPress={() => setIsYearly(false)}
        >
          <Text style={[styles.toggleText, !isYearly && styles.activeText]}>
            Monthly
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.toggleButton,
            isYearly ? styles.activeButton : styles.inactiveButton,
          ]}
          onPress={() => setIsYearly(true)}
        >
          <Text style={[styles.toggleText, isYearly && styles.activeText]}>
            Yearly
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.calendarContainer}>
        {isYearly ? <YearlyCalendar /> : <MonthlyCalendar />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // padding: 20,
    marginTop: 20,
  },
  toggleContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  toggleButton: {
    borderWidth: 1,
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginHorizontal: 5,
  },
  activeButton: {
    borderColor: "#8B4CFF",
    backgroundColor: "#F0E7FF",
  },
  inactiveButton: {
    borderColor: "#CCC",
    backgroundColor: "#FFF",
  },
  toggleText: {
    fontSize: 18,
    color: "#CCC",
  },
  activeText: {
    color: "#000",
    fontWeight: "bold",
  },
  calendarContainer: {
    // marginTop: 5,
    width: "100%",
  },
});
