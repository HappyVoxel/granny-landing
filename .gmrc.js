require('dotenv/config');

/** @type {import('graphile-migrate').Settings} */
module.exports = {
  connectionString: process.env.DATABASE_URL,
  shadowConnectionString: process.env.SHADOW_DATABASE_URL,
  rootConnectionString: process.env.ROOT_DATABASE_URL,
  pgSettings: {},
  placeholders: {},
  afterReset: [],
  afterAllMigrations: [],
  afterCurrent: [],
};
