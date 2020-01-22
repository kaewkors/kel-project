
exports.up = function(knex) {
    return knex.schema.createTable('green', (table) => {
        table.increments('id').primary()
        table.string('types-of-compost')
        table.string('items')

    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('green')
};
