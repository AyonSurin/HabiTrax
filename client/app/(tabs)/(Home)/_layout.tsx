import { Stack } from "expo-router";
import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StatusBar } from "react-native";

export default function HomeLayout() {
  return (
    <>
      <StatusBar backgroundColor="#f2f2f2" />
      <ExpoStatusBar style="dark" />
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(AddHabit)" options={{ headerShown: false }} />
        <Stack.Screen name="habit" options={{ headerShown: false }} />
        <Stack.Screen name="editHabit" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}
