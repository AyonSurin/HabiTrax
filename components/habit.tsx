import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";

export default function Habit() {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <TouchableOpacity>
          <Image
            style={styles.tick}
            source={require("../assets/images/tick.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.centerContainer}>
        <Text style={styles.header}>Habit</Text>
        <Text style={styles.desc}>Lorem ipsum dolor sit amet consectetur.</Text>
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.streak_title}>40</Text>
        <Text style={styles.streak_unit}>Days</Text>
      </View>
      <Image source={require("../assets/images/fire_icon.png")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "95%",
    height: 100,
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 2.5,
    borderRadius: 30,
    alignSelf: "center",
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
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
  header: {
    fontSize: 24,
    color: "black",
    fontWeight: "800",
    marginBottom: 5,
  },
  desc: {
    fontWeight: "300",
    fontSize: 15,
    color: "black",
  },
  tick: {
    height: 60,
    width: 60,
  },
  streak_title: {
    fontSize: 25,
    color: "black",
    fontWeight: "700",
    textAlign: "right",
  },
  streak_unit: {
    fontSize: 18,
    color: "black",
    fontWeight: "400",
    textAlign: "right",
  },
});
