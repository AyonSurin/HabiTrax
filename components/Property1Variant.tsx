import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color, Padding, Border } from "../GlobalStyles";

export type Property1VariantType = {
  /** Style props */
  propTop?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Property1Variant = ({ propTop }: Property1VariantType) => {
  const property1Variant2Style = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  return (
    <View
      style={[
        styles.property1variant2,
        styles.property1variantShadowBox,
        property1Variant2Style,
      ]}
    >
      <View style={styles.materialParentFlexBox1}>
        <Image
          style={styles.materialSymbolscheckCircleIcon}
          contentFit="cover"
          source={require("../assets/materialsymbolscheckcircleoutlinerounded2.png")}
        />
        <Text style={styles.today}>Today</Text>
      </View>
      <View
        style={[
          styles.materialSymbolscalendarMontGroup,
          styles.materialFlexBox,
        ]}
      >
        <Image
          style={styles.materialSymbolscheckCircleIcon}
          contentFit="cover"
          source={require("../assets/materialsymbolscalendarmonthoutlinerounded.png")}
        />
        <Text style={styles.today}>Month</Text>
      </View>
      <View style={styles.materialParentFlexBox1}>
        <Image
          style={styles.materialSymbolscheckCircleIcon}
          contentFit="cover"
          source={require("../assets/materialsymbolscalendarviewmonth.png")}
        />
        <Text style={styles.today}>Year</Text>
      </View>
      <View style={styles.materialParentFlexBox1}>
        <Image
          style={styles.materialSymbolscheckCircleIcon}
          contentFit="cover"
          source={require("../assets/materialsymbolssettingsrounded.png")}
        />
        <Text style={styles.today}>Settings</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  materialSymbolscheckCircleIcon: {
    width: 24,
    height: 24,
  },
  today: {
    fontSize: FontSize.size_xs,
    letterSpacing: 0.1,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: FontFamily.robotoBold,
    color: Color.colorDimgray,
    textAlign: "center",
    alignSelf: "stretch",
  },
  materialParentFlexBox1: {
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: 0,
    alignItems: "center",
    width: 50,
    borderRadius: Border.br_xs,
    justifyContent: "space-between",
    alignSelf: "stretch",
  },
  materialSymbolscalendarMontGroup: {
    backgroundColor: Color.colorGray_300,
  },
  property1variant2: {
    top: 108,
  },
});

export default Property1Variant;
