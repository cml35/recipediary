import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import MainScreen from "./components/MainScreen";
import HomeScreen from "./components/HomeScreen";
import RecipeEntryFormScreen from "./components/RecipeEntryFormScreen";

const Root = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Root.Navigator>
        <Root.Screen name="MainScreen" component={MainScreen} />
        <Root.Screen name="HomeScreen" component={HomeScreen} />
        <Root.Screen
          name="RecipeEntryFormScreen"
          component={RecipeEntryFormScreen}
        />
      </Root.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#fff",

    alignItems: "center",

    justifyContent: "center",
  },
});
