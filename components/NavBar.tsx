import { StyleSheet, View, Image } from "react-native";

export default function NavBar() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/images/navbar_logo.png")}
      />
      <View style={styles.iconsContainer}>
        <Image
          style={styles.icon}
          source={require("../assets/images/add_habit.png")}
        />
        <Image
          style={styles.icon}
          source={require("../assets/images/profile.png")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: 10,
  },
  logo: {
    marginLeft: 10,
    height: 45,
    width: 45,
  },
  iconsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
  },
  icon: {
    marginHorizontal: 15,
    width: 20,
    height: 20,
  },
});
