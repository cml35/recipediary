interface Recipe {
  title: string;
  method: string;
  ingredients: string;
}

const url = "http://localhost:3001";

async function addRecipe(recipe: Recipe) {
  try {
    const response = await fetch(`${url}/recipes`, {
      body: recipe,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log(await response.text());
  } catch (err) {
    console.log(err);
  }

  // Throw on error.
}

// function deleteRecipe() {}
// function editRecipe() {}
// function getRecipe() {}

export default addRecipe;
