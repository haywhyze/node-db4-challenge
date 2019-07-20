
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {recipe_name: 'Nigerian Fried Rice'},
        {recipe_name: 'Banga Rice'},
        {recipe_name: 'Nigerian Jollof Rice'},
      ]);
    });
};
