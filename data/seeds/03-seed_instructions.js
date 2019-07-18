
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions').del()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {description: 'Parboil the long grain parboiled rice', step_number: 1, ingredient_quantity: 20, recipe_id: 2, ingredient_id: 1},
        {description: 'Boil some water and use it to mix the banga concentrate', step_number: 2, ingredient_quantity: 10, recipe_id: 2, ingredient_id: 2},
        {description: 'Add stock cube (crushed)', step_number: 3, ingredient_quantity: 3, recipe_id: 2, ingredient_id: 3},
        {description: 'Add ground cayenne pepper.', step_number: 4, ingredient_quantity: 21, recipe_id: 2, ingredient_id: 4},
        
        {description: 'Parboil the long grain parboiled rice', step_number: 1, ingredient_quantity: 45, recipe_id: 3, ingredient_id: 5},
        {description: 'Boil some water and use it to mix the banga concentrate', step_number: 2, ingredient_quantity: 2, recipe_id: 3, ingredient_id: 6},
        {description: 'Add stock cube (crushed)', step_number: 3, ingredient_quantity: 17, recipe_id: 3, ingredient_id: 8},
        {description: 'Add ground cayenne pepper.', step_number: 4, ingredient_quantity: 13, recipe_id: 3, ingredient_id: 7},
        
        {description: 'Parboil the long grain parboiled rice', step_number: 1, ingredient_quantity: 36, recipe_id: 1, ingredient_id: 12},
        {description: 'Boil some water and use it to mix the banga concentrate', step_number: 2, ingredient_quantity: 20, recipe_id: 1, ingredient_id: 9},
        {description: 'Add stock cube (crushed)', step_number: 3, ingredient_quantity: 3, recipe_id: 1, ingredient_id: 3},
        {description: 'Add ground cayenne pepper.', step_number: 4, ingredient_quantity: 4, recipe_id: 1, ingredient_id: 7},
      ]);
    });
};
