import { Stack } from "expo-router";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StatusBar } from "react-native"; // Use native StatusBar for backgroundColor

export default function RootLayout() {
  return (
    <>
      <StatusBar backgroundColor="#f2f2f2" />
      <ExpoStatusBar style="dark" />
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(signup)" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(login)" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}
