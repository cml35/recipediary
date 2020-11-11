import express from "express";
import Database, { Recipe } from "./database";

const router = express.Router();

router.post("/recipes", (req, res) => {
  // TODO: Validate
  const recipe = req.body as Recipe;
  const database = new Database();

  try {
    database.add(recipe);
  } catch (e) {
    // Show an error
  }

  return res.status(200).send();
});

export default router;
