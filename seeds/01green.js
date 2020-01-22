
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('green').del()
    .then(function () {
      // Inserts seed entries
      return knex('green').insert([
        {id: 1, 'types-of-compost': 'plant wastes', item: 'Grass clippings'},
        {id: 2, 'types-of-compost': 'plant wastes', item:'Tree leaves'},
        {id: 3, 'types-of-compost': 'plant produced', item: 'Printer paper'}
    ,},)}