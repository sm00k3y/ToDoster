import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BottomTabNavigation from "./BottomTabNavigation";
import NotFound from "../screens/NotFound";
import { ThemeContext } from "../themes/ThemeProvider";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const colors = useContext(ThemeContext).colors;

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          navigationBarColor: colors.background,
          headerStyle: { backgroundColor: colors.background },
          headerTitleStyle: { color: colors.text },
          headerTintColor: colors.text,
        }}
      >
        <Stack.Screen
          name="Root"
          component={BottomTabNavigation}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="NotFound" component={NotFound} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
