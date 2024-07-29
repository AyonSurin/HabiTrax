import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import Property1DefaultImage from "./Property1DefaultImage";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const FrameComponent = () => {
  return (
    <View style={styles.frameParent}>
      <View style={styles.frameGroup}>
        <View style={styles.materialSymbolscheckCircleParent}>
          <Property1DefaultImage
            property1DefaultImageProp={require("../assets/materialsymbolscheckcircleoutlinerounded3.png")}
            property1DefaultIconWidth={54}
            property1DefaultIconHeight={54}
            property1DefaultIconPosition="relative"
            property1DefaultIconTop="unset"
            property1DefaultIconLeft="unset"
          />
          <View style={styles.habitParent}>
            <Text style={[styles.habit, styles.textTypo]}>Habit</Text>
            <Text style={styles.loremIpsumDolor}>
              Lorem ipsum dolor sit amet consectetur.
            </Text>
          </View>
        </View>
        <View style={styles.frameContainer}>
          <View style={styles.parent}>
            <Text style={[styles.text, styles.textFlexBox]}>40</Text>
            <Text style={[styles.days, styles.textFlexBox]}>Days</Text>
          </View>
          <Image
            style={styles.materialSymbolsmodeHeatIcon}
            contentFit="cover"
            source={require("../assets/materialsymbolsmodeheat.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    color: Color.colorBlack,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "600",
    letterSpacing: 0.2,
  },
  textFlexBox: {
    textAlign: "center",
    lineHeight: 20,
    alignSelf: "stretch",
  },
  habit: {
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    lineHeight: 20,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "600",
    letterSpacing: 0.2,
  },
  loremIpsumDolor: {
    fontSize: FontSize.size_xs,
    lineHeight: 16,
    fontWeight: "300",
    fontFamily: FontFamily.robotoLight,
    display: "flex",
    width: 162,
    marginTop: 8,
    color: Color.colorDimgray,
    textAlign: "left",
    alignItems: "center",
  },
  habitParent: {
    marginLeft: 8,
    justifyContent: "center",
  },
  materialSymbolscheckCircleParent: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "600",
    letterSpacing: 0.2,
    textAlign: "center",
  },
  days: {
    fontSize: FontSize.size_sm,
    letterSpacing: 0.1,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    marginTop: -4,
    color: Color.colorDimgray,
  },
  parent: {
    width: 36,
    justifyContent: "center",
    alignItems: "center",
  },
  materialSymbolsmodeHeatIcon: {
    width: 40,
    height: 40,
  },
  frameContainer: {
    alignItems: "flex-end",
    flexDirection: "row",
    justifyContent: "center",
  },
  frameGroup: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  frameParent: {
    shadowColor: "#f1f5f9",
    shadowOffset: {
      width: 0,
      height: 16,
    },
    shadowRadius: 16,
    elevation: 16,
    shadowOpacity: 1,
    borderRadius: Border.br_5xl,
    backgroundColor: Color.colorWhitesmoke,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    width: 320,
    height: 90,
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_xs,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FrameComponent;
