import React, { useContext } from "react";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BottomTabNavigation from "./BottomTabNavigation";
import NotFound from "../screens/NotFound";
import { ThemeContext } from "../themes/ThemeProvider";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const colors = useContext(ThemeContext).colors;

  return (
    <NavigationContainer
      theme={{
        ...DefaultTheme,
        colors: { ...DefaultTheme.colors, background: "transparent" },
      }}
    >
      <Stack.Navigator
        screenOptions={{
          navigationBarColor: colors.background,
          headerStyle: { backgroundColor: colors.background },
          headerTitleStyle: { color: colors.text },
          headerTintColor: colors.text,
          // presentation: "transparentModal",
        }}
      >
        <Stack.Screen
          name="Root"
          component={BottomTabNavigation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NotFound"
          component={NotFound}
          options={{ presentation: "transparentModal" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
