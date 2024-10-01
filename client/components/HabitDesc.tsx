import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import WeekCalendar from "./calendar/WeeklyCalendar";

export default function HabitDesc({
  name,
  description,
}: {
  name: string;
  description: string;
}) {
  return (
    <View style={styles.container}>
      {/* Top content */}
      <View style={styles.topContainer}>
        <View style={styles.leftContainer}>
          <TouchableOpacity>
            <Image
              style={styles.tick}
              source={require("@/assets/images/tick.png")}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.centerContainer}>
          <Text style={styles.header}>{name}</Text>
          <Text style={styles.desc}>{description}</Text>
        </View>
        <View style={styles.rightContainer}>
          <Text style={styles.streakTitle}>40</Text>
          <Text style={styles.streakUnit}>Days</Text>
        </View>
        <Image
          style={styles.fireIcon}
          source={require("@/assets/images/fire_purple.png")}
        />
      </View>

      {/* Bottom Week Calendar */}
      <View style={styles.bottomContainer}>
        <WeekCalendar />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "95%",
    height: 150,
    backgroundColor: "#F0EEFC", // Lighter background
    borderColor: "#B089FE", // Softer border
    borderWidth: 2.5,
    borderRadius: 30,
    alignSelf: "center",
    marginTop: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
    justifyContent: "space-between",
  },
  topContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  leftContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  centerContainer: {
    flex: 3,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  rightContainer: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
    paddingRight: 10,
  },
  bottomContainer: {
    width: "100%",
  },
  header: {
    fontSize: 22,
    color: "#333",
    fontWeight: "700",
  },
  desc: {
    fontSize: 14,
    color: "#555",
    fontWeight: "300",
  },
  tick: {
    height: 50,
    width: 50,
  },
  streakTitle: {
    fontSize: 24,
    color: "#333",
    fontWeight: "700",
    right: 4,
  },
  streakUnit: {
    fontSize: 16,
    color: "#888",
  },
  fireIcon: {
    width: 28,
    height: 30,
    marginLeft: 5,
  },
});
