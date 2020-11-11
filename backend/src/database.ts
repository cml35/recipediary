import { query } from "express";
const { Client } = require("pg");

const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "recipediary",
  password: "abc123",
  port: 5432,
});
client.connect();

export interface Recipe {
  title: string;
  method: string;
  ingredients: string;
}

export default class Database {
  public constructor() {
    client.connect();
  }

  public add(recipe: Recipe) {
    client.query(
      `INSERT INTO recipe (recipe_title, recipe_method, recipe_ingredients) VALUES(${recipe.title}, ${recipe.method}, ${recipe.ingredients})`
    );
  }

  public remove(recipe: Recipe) {
    client.query("");
  }
}
