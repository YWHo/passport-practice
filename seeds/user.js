
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        {id: 1, name: 'user1', email:'user1@sample.co.nz'},
        {id: 2, name: 'user2', email:'user2@sample.co.nz'},
        {id: 3, name: 'user3', email:'user3@sample.co.nz'}
      ]);
    });
};
