
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient_description: 'cups of long grain parboiled rice'},
        {ingredient_description: 'grams of tinned banga (palm fruit concentrate)'},
        {ingredient_description: 'smoked fish'},
        {ingredient_description: 'big stock cube'},
        {ingredient_description: 'red onion (red onion recommended)'},
        {ingredient_description: 'tablespoon ground crayfish'},
        {ingredient_description: 'Habanero pepper'},
        {ingredient_description: 'Salt (to taste)'},
        {ingredient_description: 'Scent leaves (to your liking)'},
        {ingredient_description: 'Vegetable Oil'},
        {ingredient_description: 'Chicken (whole chicken or chicken drumsticks)'},
        {ingredient_description: 'tablespoon Nigerian curry powder (NOT Indian Curry)'},
      ]);
    });
};
