import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import MainScreen from "./screens/MainScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={MainScreen}
          options={{ title: "Welcome" }}
        />
        {/* <Stack.Screen name="Species" component={ProfileScreen} />
        <Stack.Screen name="Planets" component={ProfileScreen} />
        <Stack.Screen name="People" component={ProfileScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
