import { query } from "express";
const { Client } = require("pg");

const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "recipediary",
  password: "abc123",
  port: 3211,
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
    let title = "";
    let method = "";
    let ingredients = "";

    client.query(
      `INSERT INTO recipe (recipe_title, recipe_method, recipe_ingredients) VALUES(${title}, ${method}, ${ingredients})`
    );
  }

  public remove(recipe: Recipe) {
    client.query("");
  }
}
