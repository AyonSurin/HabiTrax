import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

const MaterialSymbolsmodeHeat = () => {
  return (
    <View style={styles.materialSymbolsmodeHeat}>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIcon: {
    position: "absolute",
    height: "75%",
    width: "66.75%",
    top: "12.5%",
    right: "16.5%",
    bottom: "12.5%",
    left: "16.75%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  materialSymbolsmodeHeat: {
    width: 40,
    height: 40,
  },
});

export default MaterialSymbolsmodeHeat;
