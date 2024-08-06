import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";

export default function NavBar() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.navbar_logo}
        source={require("../assets/images/navbar_logo.png")}
      />
      <Image
        style={styles.addIcon}
        source={require("../assets/images/add_habit.png")}
      />
      <Image
        style={styles.profileIcon}
        source={require("../assets/images/profile.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    // backgroundColor: "#ffb8b3",
    width: "100%",
    top: 5,
  },
  navbar_logo: {
    position: "relative",
    alignSelf: "flex-start",
    backgroundColor: "b3fcff",
    marginLeft: 30,
    marginBottom: 15,
    marginRight: 235,
  },
  addIcon: {
    top: 7,
    marginRight: 40,
  },
  profileIcon: {
    top: 7,
  },
});
