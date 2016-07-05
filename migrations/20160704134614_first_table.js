
exports.up = function(knex, Promise) {
  return knex.schema.createTable('first_table', function(table){
    table.increments();
    table.string('list_item');
    table.boolean('done');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('first_table');
};
