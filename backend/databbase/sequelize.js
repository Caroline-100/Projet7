const Sequelize = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();
// CONNECT TO DATABASE USE VARIABLES ENVIRONNEMENT
const database = process.env.DB_NAME;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const host = process.env.DB_HOST;
const port = process.env.DB_PORT;
const dialect = process.env.DB_DIALECT;
console.log(
  'TEST', { username },
  { database },
  { password },
  { host },
  { port },
  { dialect },
);

const sequelize = new Sequelize(database, username, password, {
  host,
  port,
  dialect,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection is established correctly');
  })
  .catch((err) => {
    console.error('Connection is not established correctly');
    console.error(err);
  });

module.exports = sequelize;
