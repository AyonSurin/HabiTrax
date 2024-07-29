import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import FrameComponent2 from "./FrameComponent2";
import FrameComponent1 from "./FrameComponent1";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const TodaySection = () => {
  return (
    <View style={styles.instanceParent}>
      <FrameComponent2
        frameViewPosition="unset"
        frameViewAlignSelf="stretch"
        frameViewHeight={42}
      />
      <View style={styles.instanceParent}>
        <FrameComponent1 frameViewPosition="unset" />
        <View style={styles.todayWrapper}>
          <Text style={styles.today}>Today</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  today: {
    fontSize: FontSize.size_7xl,
    letterSpacing: 0.3,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
    color: Color.colorGray_200,
    textAlign: "left",
  },
  todayWrapper: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: 0,
    marginTop: 8,
    alignSelf: "stretch",
  },
  instanceParent: {
    alignSelf: "stretch",
  },
});

export default TodaySection;
