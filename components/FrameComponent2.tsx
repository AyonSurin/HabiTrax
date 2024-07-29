import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

export type FrameComponent2Type = {
  /** Style props */
  frameViewPosition?: string;
  frameViewAlignSelf?: string;
  frameViewHeight?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const FrameComponent2 = ({
  frameViewPosition,
  frameViewAlignSelf,
  frameViewHeight,
}: FrameComponent2Type) => {
  const frameView1Style = useMemo(() => {
    return {
      ...getStyleValue("position", frameViewPosition),
      ...getStyleValue("alignSelf", frameViewAlignSelf),
      ...getStyleValue("height", frameViewHeight),
    };
  }, [frameViewPosition, frameViewAlignSelf, frameViewHeight]);

  return (
    <View style={[styles.timeParent, frameView1Style]}>
      <Text style={styles.time}>9:30</Text>
      <Image
        style={styles.rightIcons}
        contentFit="cover"
        source={require("../assets/right-icons.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  time: {
    fontSize: FontSize.size_sm,
    letterSpacing: 0.1,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    color: Color.colorBlack,
    textAlign: "left",
  },
  rightIcons: {
    width: 46,
    height: 17,
  },
  timeParent: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_2xs,
    alignSelf: "stretch",
  },
});

export default FrameComponent2;
