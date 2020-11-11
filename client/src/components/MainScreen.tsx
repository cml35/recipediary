const {
  responsiveFontSizes,
  StylesProvider,
  TextareaAutosize,
} = require("@material-ui/core");

import React from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import { Button } from "react-native-elements";

interface Props {
  navigation: any;
  route: any;
}

export default function MainScreen(props: Props) {
  return (
    <View style={styles.container}>
      <Text>Recipe Diary</Text>
      <Button
        title="Begin"
        onPress={() => {
          props.navigation.push("HomeScreen");
        }}
      />
    </View>
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
