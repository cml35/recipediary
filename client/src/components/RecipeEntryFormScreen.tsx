/* eslint-disable react-native/no-inline-styles */
import { StackScreenProps } from "@react-navigation/stack";
import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { Button } from "react-native-elements";
import { Recipe } from "../../../backend/src/database";
import addRecipe from "../api";

interface Props extends StackScreenProps<{}> {}

export default function RecipeEntryFormScreen({ navigation }: Props) {
  async function onComplete(recipe: Recipe) {
    await addRecipe(recipe);
    // Assume it completed correctly
    navigation.goBack();
  }

  const [text, setText] = useState("");

  return (
    <View>
      <Text>Enter new recipe details below:</Text>
      <TextInput
        style={{ height: 40 }}
        placeholder="Title"
        onChangeText={() => setText(text)}
        defaultValue={text}
      />
      <TextInput
        style={{ height: 40 }}
        placeholder="Method"
        onChangeText={() => setText(text)}
        defaultValue={text}
      />
      <TextInput
        style={{ height: 40 }}
        placeholder="Ingredients"
        onChangeText={() => setText(text)}
        defaultValue={text}
      />
      <Button title="Add entry" onPress={onComplete} />
    </View>
  );
}
