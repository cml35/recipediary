interface Recipe {
  // TODO:
}

const url = "http://localhost:9090";

async function addRecipe(recipe: Recipe) {
  try {
    const response = await fetch(`${url}/recipes`, { body: recipe });
    console.log(response);
  } catch (err) {
    console.log(err);
  }

  // Throw on error.
}

// function deleteRecipe() {}
// function editRecipe() {}
// function getRecipe() {}

export default addRecipe;
