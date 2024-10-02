import { Href, router } from "expo-router";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";

export default function Habit({
  id,
  name,
  description,
}: {
  id: string;
  name: string;
  description: string;
}) {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <TouchableOpacity>
          <Image
            style={styles.tick}
            source={require("@/assets/images/tick.png")}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.centerRightWrapper}
        onPress={() => router.navigate(`/habit/${id}` as Href)}
      >
        <View style={styles.centerContainer}>
          <Text style={styles.header}>{name}</Text>
          <Text style={styles.desc}>{description}</Text>
        </View>
        <View style={styles.rightContainer}>
          <Text style={styles.streak_title}>40</Text>
          <Text style={styles.streak_unit}>Days</Text>
        </View>
        <Image style={styles.fire} source={require("@/assets/images/fire_purple.png")} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "95%",
    height: 100,
    backgroundColor: "#f0eefc",
    borderColor: "#8B4CFF",
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
  centerRightWrapper: {
    flexDirection: "row",
    flex: 4,
    alignItems: "center",
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
    height: 50,
    width: 50,
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
  fire:{
    height: 35,
    width: 35,
  }
});
