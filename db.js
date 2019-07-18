const db = require('./data/dbConfig');

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
};

function getRecipes() {
  return db('recipes');
}
function getShoppingList(id) {
  return db('instructions')
    .join("recipes", "recipes.id", "recipe_id")
    .join("ingredients", "ingredients.id", "ingredient_id")
    .select("ingredients.ingredient_description", "instructions.ingredient_quantity")
    .where("recipe_id", id);
}
function getInstructions(id) {
  return db('instructions')
    .join("recipes", "recipes.id", "recipe_id")
    .join("ingredients", "ingredients.id", "ingredient_id")
    .select("instructions.description", "step_number", "recipes.recipe_name")
    .where("recipe_id", id)
    .orderBy("step_number");
}