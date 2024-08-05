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
          title: "Today",
          tabBarIcon: ({ focused }) => (
            <View style={focused ? styles.activeTab : styles.tab}>
              <Image
                style={{ width: 25, height: 25 }}
                source={require("../../assets/images/Vector.png")} // Replace "#" with the actual image path
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="(month)"
        options={{
          headerShown: false,
          title: "Month",
          tabBarIcon: ({ focused }) => (
            <View style={focused ? styles.activeTab : styles.tab}>
              <Image
                style={{ width: 25, height: 25 }}
                source={require("../../assets/images/Vectorcalendar.png")} // Replace "#" with the actual image path
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="(year)"
        options={{
          headerShown: false,
          title: "Year",
          tabBarIcon: () => (
            <Image
              style={{ width: 25, height: 25 }}
              source={require("../../assets/images/material-symbols_calendar-view-month.png")} // Replace "#" with the actual image path
            />
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
              source={require("../../assets/images/material-symbols_settings-rounded.png")} // Replace "#" with the actual image path
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
