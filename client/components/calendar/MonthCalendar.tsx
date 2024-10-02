import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function MonthCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [loading, setLoading] = useState(true);
  const [daysArray, setDaysArray] = useState<(number | null)[]>([]);

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const totalDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const isLeapYear = (year: number) => {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  };

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const prevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      const daysInMonth = totalDaysInMonth(year, month);
      const filledDaysArray = Array.from(
        { length: daysInMonth },
        (_, index) => (Math.random() < 0.4 ? index + 1 : null) // 40% chance of day being completed
      );
      setDaysArray(filledDaysArray);
      setLoading(false);
    }, 500);
  }, [currentDate]);

  const isToday = (day: number) => {
    const today = new Date();
    return (
      day === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear()
    );
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <Text style={styles.monthTitle}>Loading Month Data...</Text>
        <View style={styles.calendarContainer}>
          <View style={styles.daysContainer}>
            {Array.from({ length: totalDaysInMonth(year, month) }).map(
              (_, index) => (
                <View key={index} style={styles.skeletonBox}></View>
              )
            )}
          </View>
        </View>
        <Text style={styles.footerText}>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={prevMonth} style={styles.navButton}>
          <Text style={styles.navButtonText}>{"<"}</Text>
        </TouchableOpacity>
        <Text style={styles.monthTitle}>
          {monthNames[month]} {year}{" "}
          {month === 1 && isLeapYear(year) ? "(Leap Year)" : ""}
        </Text>
        <TouchableOpacity onPress={nextMonth} style={styles.navButton}>
          <Text style={styles.navButtonText}>{">"}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.calendarContainer}>
        <View style={styles.daysOfWeek}>
          {daysOfWeek.map((day, index) => (
            <Text key={index} style={styles.dayOfWeekText}>
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
                isToday(index + 1) && styles.todayBox, // Highlight today
                day ? styles.filledDayBox : styles.emptyDayBox, // Check if task is completed or not
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
        {daysArray.filter(Boolean).length} days out of {daysArray.length}{" "}
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
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  navButton: {
    padding: 10,
  },
  navButtonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#8B4CFF",
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
  daysOfWeek: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  dayOfWeekText: {
    width: "13%",
    textAlign: "center",
    fontWeight: "600",
    color: "#333",
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
  todayBox: {
    borderColor: "#C0FF4C",
    borderWidth: 3,
  },
  todayEmptyDayBox: {
    backgroundColor: "#EDFFCC",
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
    backgroundColor: "#e0e0e0",
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
