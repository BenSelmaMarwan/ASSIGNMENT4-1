exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('members')
      .del()
      .then(function () {
        // Inserts seed entries
        return knex('members').insert([
          {
            first_name: 'John',
            last_name: 'Doe',
            email: 'john.doe@example.com',
            join_date: '2023-01-15',
          },
          {
            first_name: 'Alice',
            last_name: 'Smith',
            email: 'alice.smith@example.com',
            join_date: '2023-02-10',
          },
        ]);
      });
  };