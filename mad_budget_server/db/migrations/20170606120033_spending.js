
exports.up = function(knex, Promise) {
  return knex.schema.createTable('spendings', function(table){
    table.increments();
    table.string("date").notNullable();
    table.string("month");
    table.text("item").notNullable();
    table.float("amount").notNullable();
    table.text("category").notNullable();
    table.text("memo");
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('spendings')
};
