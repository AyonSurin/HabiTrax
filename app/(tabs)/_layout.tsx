import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="(Home)"
        options={{ headerShown: false, title: "Home" }}
      />
      <Tabs.Screen name="Settings" options={{ headerShown: false }} />
    </Tabs>
  );
}
