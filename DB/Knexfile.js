
module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      host: 'localhost',
      user: 'postgres',
      password: 'Marwan.01',
      database: 'gym_management',
    },
    migrations: {
      directory: __dirname + './DB/migrations',
    },
    seeds: {
      directory: __dirname + './DB/seeds',
    },
  },
};