import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, ImageSourcePropType } from "react-native";

export type Property1DefaultImageType = {
  property1DefaultImageProp?: ImageSourcePropType;

  /** Style props */
  property1DefaultIconWidth?: number | string;
  property1DefaultIconHeight?: number | string;
  property1DefaultIconPosition?: string;
  property1DefaultIconTop?: number | string;
  property1DefaultIconLeft?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Property1DefaultImage = ({
  property1DefaultImageProp,
  property1DefaultIconWidth,
  property1DefaultIconHeight,
  property1DefaultIconPosition,
  property1DefaultIconTop,
  property1DefaultIconLeft,
}: Property1DefaultImageType) => {
  const property1DefaultIconStyle = useMemo(() => {
    return {
      ...getStyleValue("width", property1DefaultIconWidth),
      ...getStyleValue("height", property1DefaultIconHeight),
      ...getStyleValue("position", property1DefaultIconPosition),
      ...getStyleValue("top", property1DefaultIconTop),
      ...getStyleValue("left", property1DefaultIconLeft),
    };
  }, [
    property1DefaultIconWidth,
    property1DefaultIconHeight,
    property1DefaultIconPosition,
    property1DefaultIconTop,
    property1DefaultIconLeft,
  ]);

  return (
    <Image
      style={[styles.property1defaultIcon, property1DefaultIconStyle]}
      contentFit="cover"
      source={property1DefaultImageProp}
    />
  );
};

const styles = StyleSheet.create({
  property1defaultIcon: {
    width: 70,
    height: 70,
  },
});

export default Property1DefaultImage;
