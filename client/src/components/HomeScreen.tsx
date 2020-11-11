import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Button } from "react-native-elements";

interface Props {
  navigation: any;
  route: any;
}

const HomeScreen = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text>Home Screen is here!</Text>
      <Button
        title="New Entry"
        onPress={() => {
          props.navigation.push("RecipeEntryFormScreen");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HomeScreen;
