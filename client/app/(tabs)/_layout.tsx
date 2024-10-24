import { Tabs } from "expo-router";
import { Image, View, StyleSheet, StatusBar, Keyboard } from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";

export default function TabLayout() {
  const [keyboardVisible, setKeyboardVisible] = useState(false); // State to track keyboard visibility

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardVisible(false);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return (
    <>
      <StatusBar backgroundColor="#f2f2f2" />
      <ExpoStatusBar style="dark" />
      <Tabs
        screenOptions={{
          tabBarActiveBackgroundColor: "#c7c7c7",
          tabBarShowLabel: true,
          tabBarLabelStyle: { fontSize: 12 },
          tabBarStyle: {
            height: 55,
            display: keyboardVisible ? "none" : "flex", // Hide tabs when keyboard is visible
          },
          tabBarItemStyle: styles.tabBarItem,
        }}
      >
        <Tabs.Screen
          name="(Home)"
          options={{
            headerShown: false,
            title: "Home",
            tabBarIcon: ({ focused }) => (
              <View style={focused ? styles.activeTab : styles.tab}>
                <Image
                  style={{ width: 25, height: 25 }}
                  source={require("@/assets/images/tabs_tick.png")} // Replace "#" with the actual image path
                />
              </View>
            ),
          }}
        />
        {/* <Tabs.Screen
          name="(Profile)"
          options={{
            headerShown: false,
            title: "Profile",
            tabBarIcon: ({ focused }) => (
              <View style={focused ? styles.activeTab : styles.tab}>
                <Image
                  style={{ width: 25, height: 25 }}
                  source={require("@/assets/images/profile.png")} // Replace "#" with the actual image path
                />
              </View>
            ),
          }}
        /> */}
        <Tabs.Screen
          name="Settings"
          options={{
            headerShown: false,
            title: "Settings",
            tabBarIcon: () => (
              <Image
                style={{ width: 25, height: 25 }}
                source={require("@/assets/images/material-symbols_settings-rounded.png")} // Replace "#" with the actual image path
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
}

const styles = StyleSheet.create({
  tabBarItem: {
    borderRadius: 10, // Rounded corners for individual tabs
  },
  activeTab: {
    backgroundColor: "#c7c7c7",
    borderRadius: 10,
    padding: 5,
  },
  tab: {
    borderRadius: 10,
    padding: 5,
  },
});
