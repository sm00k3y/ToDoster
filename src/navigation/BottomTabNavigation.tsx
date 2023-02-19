import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useContext } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";

import Home from "../screens/Home";
import SettingsPage from "../screens/Settings";
import Database from "../screens/Database";
import { ThemeContext } from "../themes/ThemeProvider";

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  const colors = useContext(ThemeContext).colors;

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: { backgroundColor: colors.background },
        headerStyle: { backgroundColor: colors.background },
        headerTitleStyle: { color: colors.text },
        headerTitleAlign: "center",
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: "Notes",
          tabBarIcon: () => tabBarIcon("code", 24, colors.text),
        }}
      />
      <Tab.Screen
        name="Database"
        component={Database}
        options={{
          title: "Database",
          tabBarIcon: () => tabBarIcon("plus", 20, colors.text),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsPage}
        options={{
          title: "Settings",
          tabBarIcon: () => tabBarIcon("cog", 24, colors.text),
        }}
      />
    </Tab.Navigator>
  );
};

const tabBarIcon = (
  name: keyof typeof FontAwesome.glyphMap,
  size: number,
  color: string
) => {
  return <FontAwesome name={name} size={size} color={color} />;
};

export default BottomTabNavigation;
