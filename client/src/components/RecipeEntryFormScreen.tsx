/* eslint-disable react-native/no-inline-styles */
import { StackScreenProps } from "@react-navigation/stack";
import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { Button } from "react-native-elements";
import addRecipe from "../api";

interface Props extends StackScreenProps<{}> {}

export default function RecipeEntryFormScreen({ navigation }: Props) {
  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [ingredients, setIngredients] = useState("");

  async function onComplete() {
    await addRecipe({
      title,
      method,
      ingredients,
    });
    // Assume it completed correctly
    navigation.goBack();
  }

  return (
    <View>
      <Text>Enter new recipe details below:</Text>
      <TextInput
        style={{ height: 40 }}
        placeholder="Title"
        onChangeText={() => setTitle(title)}
        defaultValue={title}
      />
      <TextInput
        style={{ height: 40 }}
        placeholder="Method"
        onChangeText={() => setMethod(method)}
        defaultValue={method}
      />
      <TextInput
        style={{ height: 40 }}
        placeholder="Ingredients"
        onChangeText={() => setIngredients(ingredients)}
        defaultValue={ingredients}
      />
      <Button title="Add entry" onPress={onComplete} />
    </View>
  );
}
