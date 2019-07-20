
exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', tbl => {
      tbl.increments();
      tbl.string('recipe_name', 128)
        .notNullable();
    })
    .createTable('ingredients', tbl => {
      tbl.increments();
      tbl.string('ingredient_description', 128)
        .notNullable();
    })
    .createTable('instructions', tbl => {
      tbl.increments();
      tbl.string('description', 128);
      tbl.integer('step_number')
        .notNullable();
      tbl.decimal('ingredient_quantity')
      tbl.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      tbl.integer('ingredient_id')
        .unsigned()
        .references('id')
        .inTable('ingredients')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('instructions')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes');
};
