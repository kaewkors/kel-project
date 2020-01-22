
exports.up = function(knex) {
    return knex.schema.createTable('alltypes', table=> {
        table.increments('id')
        table.string('category')
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable('alltypes')
};
