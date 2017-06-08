// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: process.env.DATABASE_URL || 'spendingdb',
    },
    migrations: {
      directory: __dirname + '/db/migrations',
    },
    seeds: {
      directory: __dirname + '/db/seeds',
    },
  }
  // production: {
  //   client: 'pg',
  //   connection: {
  //     database: process.env.DATABASE_URL || 'spendings',
  //   },
  //   migrations: {
  //     directory: '/db/migrations',
  //   },
  //   seeds: {
  //     directory: '/db/seeds',
  //  },
  //}

};
