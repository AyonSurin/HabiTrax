import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Padding, Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const FrameComponentSet = () => {
  return (
    <View style={styles.property1defaultParent}>
      <View style={[styles.property1default, styles.property1variantShadowBox]}>
        <View
          style={[
            styles.materialSymbolscheckCircleParent,
            styles.materialParentFlexBox1,
          ]}
        >
          <Image
            style={styles.materialSymbolscheckCircleIcon}
            contentFit="cover"
            source={require("../assets/materialsymbolscheckcircleoutlinerounded2.png")}
          />
          <Text style={styles.today}>Today</Text>
        </View>
        <View style={styles.materialFlexBox}>
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
      <View
        style={[
          styles.property1variant3,
          styles.property1variantShadowBox,
          property1Variant3Style,
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
        <View style={styles.materialFlexBox}>
          <Image
            style={styles.materialSymbolscheckCircleIcon}
            contentFit="cover"
            source={require("../assets/materialsymbolscalendarmonthoutlinerounded.png")}
          />
          <Text style={styles.today}>Month</Text>
        </View>
        <View
          style={[
            styles.materialSymbolscheckCircleParent,
            styles.materialParentFlexBox1,
          ]}
        >
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
      <View
        style={[
          styles.property1variant4,
          styles.property1variantShadowBox,
          property1Variant4Style,
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
        <View style={styles.materialFlexBox}>
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
        <View
          style={[
            styles.materialSymbolscheckCircleParent,
            styles.materialParentFlexBox1,
          ]}
        >
          <Image
            style={styles.materialSymbolscheckCircleIcon}
            contentFit="cover"
            source={require("../assets/materialsymbolssettingsrounded.png")}
          />
          <Text style={styles.today}>Settings</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  property1variantShadowBox: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_6xl,
    justifyContent: "space-between",
    flexDirection: "row",
    width: 360,
    backgroundColor: Color.colorGray_100,
    shadowOpacity: 1,
    elevation: 16,
    shadowRadius: 16,
    shadowOffset: {
      width: 0,
      height: -16,
    },
    shadowColor: "#f1f5f9",
    left: 20,
    position: "absolute",
  },
  materialParentFlexBox1: {
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: 0,
    alignItems: "center",
    width: 50,
    borderRadius: Border.br_xs,
    alignSelf: "stretch",
    justifyContent: "space-between",
  },
  materialFlexBox: {
    paddingVertical: Padding.p_10xs,
    paddingHorizontal: 0,
    alignItems: "center",
    width: 50,
    borderRadius: Border.br_xs,
    alignSelf: "stretch",
    justifyContent: "space-between",
  },
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
  materialSymbolscheckCircleParent: {
    backgroundColor: Color.colorGray_300,
  },
  property1default: {
    top: 20,
  },
  materialSymbolscalendarMontGroup: {
    backgroundColor: Color.colorGray_300,
  },
  property1variant2: {
    top: 108,
  },
  property1variant3: {
    top: 196,
  },
  property1variant4: {
    top: 284,
  },
  property1defaultParent: {
    borderRadius: Border.br_8xs,
    borderStyle: "dashed",
    borderColor: Color.colorBlueviolet,
    borderWidth: 1,
    width: 400,
    height: 372,
    overflow: "hidden",
  },
});

export default FrameComponentSet;
