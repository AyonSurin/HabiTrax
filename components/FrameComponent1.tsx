import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import { Color, Padding } from "../GlobalStyles";

export type FrameComponent1Type = {
  /** Style props */
  frameViewPosition?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const FrameComponent1 = ({ frameViewPosition }: FrameComponent1Type) => {
  const frameViewStyle = useMemo(() => {
    return {
      ...getStyleValue("position", frameViewPosition),
    };
  }, [frameViewPosition]);

  return (
    <View style={[styles.unionParent, styles.parentFlexBox, frameViewStyle]}>
      <Image
        style={styles.unionIcon}
        contentFit="cover"
        source={require("../assets/union.png")}
      />
      <View style={[styles.vectorParent, styles.parentFlexBox]}>
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
        <Image
          style={styles.materialSymbolscontactsProdIcon}
          contentFit="cover"
          source={require("../assets/materialsymbolscontactsproduct.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  unionIcon: {
    width: 40,
    height: 40,
  },
  vectorIcon: {
    width: 16,
    height: 16,
  },
  materialSymbolscontactsProdIcon: {
    width: 24,
    height: 24,
  },
  vectorParent: {
    width: 58,
  },
  unionParent: {
    backgroundColor: Color.colorWhite,
    paddingHorizontal: Padding.p_lg,
    paddingTop: Padding.p_xs,
    paddingBottom: Padding.p_base,
    alignSelf: "stretch",
  },
});

export default FrameComponent1;
