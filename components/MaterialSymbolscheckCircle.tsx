import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import Property1DefaultImage from "./Property1DefaultImage";
import { Border, Color } from "../GlobalStyles";

const MaterialSymbolscheckCircle = () => {
  return (
    <View style={styles.materialSymbolscheckCircle}>
      <Image
        style={[styles.property1defaultIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/property-1default.png")}
      />
      <Property1DefaultImage
        property1DefaultImageProp={require("../assets/property-1variant3.png")}
        property1DefaultIconWidth={70}
        property1DefaultIconHeight={70}
        property1DefaultIconPosition="absolute"
        property1DefaultIconTop={154}
        property1DefaultIconLeft={20}
      />
      <Image
        style={[styles.property1variant2Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/materialsymbolscheckcircleoutlinerounded2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    left: 20,
    position: "absolute",
  },
  property1defaultIcon: {
    top: 20,
    width: 70,
    height: 70,
  },
  property1variant2Icon: {
    top: 110,
    width: 24,
    height: 24,
  },
  materialSymbolscheckCircle: {
    borderRadius: Border.br_8xs,
    borderStyle: "dashed",
    borderColor: Color.colorBlueviolet,
    borderWidth: 1,
    width: 110,
    height: 244,
    overflow: "hidden",
  },
});

export default MaterialSymbolscheckCircle;
