import { View, Text, StyleSheet } from "react-native";

export default function WeekCalendar() {
  const daysOfWeek = ["S", "M", "T", "W", "T", "F", "S"];
  const daysInWeek = 7;
  const probabilityOfTrue = 0.8;

  const daysArray = Array.from(
    { length: daysInWeek },
    () => Math.random() < probabilityOfTrue
  );

  return (
    <View style={styles.container}>
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
              <Text style={day ? styles.dayText : styles.notFilledText}>
                {daysOfWeek[index]}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  calendarContainer: {
    alignItems: "center",
  },
  daysContainer: {
    width: "85%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dayBox: {
    width: 35,
    height: 35,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    margin: 3,
  },
  filledDayBox: {
    backgroundColor: "#8B4CFF",
  },
  emptyDayBox: {
    backgroundColor: "#FFFFFF",
    borderColor: "#EAEAEA",
    borderWidth: 1,
  },
  dayText: {
    color: "white",
    fontWeight: "600",
    fontSize: 17,
  },
  notFilledText: {
    color: "black",
    fontWeight: "600",
    fontSize: 17,
  },
});
