const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import AndroidLarge from "./screens/AndroidLarge";
import MaterialSymbolscheckCircle from "./components/MaterialSymbolscheckCircle";
import FrameComponent from "./components/FrameComponent";
import Property1DefaultImage from "./components/Property1DefaultImage";
import MaterialSymbolsmodeHeat from "./components/MaterialSymbolsmodeHeat";
import FrameComponent1 from "./components/FrameComponent1";
import FrameComponent2 from "./components/FrameComponent2";
import FrameComponentSet from "./components/FrameComponentSet";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Roboto-Light": require("./assets/fonts/Roboto-Light.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="AndroidLarge"
              component={AndroidLarge}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
