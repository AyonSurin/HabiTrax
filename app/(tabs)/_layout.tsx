import { Tabs } from "expo-router";
import { Image, View, StyleSheet } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveBackgroundColor: "#c7c7c7",
        tabBarShowLabel: true, // Ensure labels are shown
        tabBarLabelStyle: { fontSize: 12 }, // Adjust label size if needed
        tabBarStyle: {
          height: 55,
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
                source={require("@/assets/images/tick.png")} // Replace "#" with the actual image path
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
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
      />
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
