import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import MainScreen from "./screens/MainScreen";
import { ScreensMapping } from "./screens/ScreensMapping";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={"Home"} component={MainScreen} />
        {Object.keys(ScreensMapping).map((screenName) => {
          return (
            <Stack.Screen
              key={screenName}
              name={screenName}
              component={ScreensMapping[screenName]}
            />
          );
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
