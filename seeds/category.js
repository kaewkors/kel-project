
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('alltypes').del()
    .then(function () {
      // Inserts seed entries
      return knex('alltypes').insert([
        {id: 1, category: 'Compost'},
        {id: 2, category: 'Landfill'},
        {id: 3, category: 'Recycling'}
      ]);
    });
};
