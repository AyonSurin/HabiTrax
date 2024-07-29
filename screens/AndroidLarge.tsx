import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import TodaySection from "../components/TodaySection";
import FrameComponent from "../components/FrameComponent";
import FrameComponentSet from "./FrameComponentSet";
import { Color } from "../GlobalStyles";

const AndroidLarge = () => {
  return (
    <View style={styles.androidLarge4}>
      <TodaySection />
      <FrameComponent
        materialSymbolscheckCircl={require("../assets/materialsymbolscheckcircleoutlinerounded.png")}
      />
      <FrameComponent
        materialSymbolscheckCircl={require("../assets/materialsymbolscheckcircleoutlinerounded.png")}
      />
      <FrameComponent
        materialSymbolscheckCircl={require("../assets/materialsymbolscheckcircleoutlinerounded.png")}
      />
      <FrameComponent
        materialSymbolscheckCircl={require("../assets/materialsymbolscheckcircleoutlinerounded1.png")}
      />
      <FrameComponent
        materialSymbolscheckCircl={require("../assets/materialsymbolscheckcircleoutlinerounded1.png")}
      />
      <FrameComponent
        materialSymbolscheckCircl={require("../assets/materialsymbolscheckcircleoutlinerounded1.png")}
      />
      <FrameComponentSet />
    </View>
  );
};

const styles = StyleSheet.create({
  androidLarge4: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    alignItems: "center",
  },
});

export default AndroidLarge;
