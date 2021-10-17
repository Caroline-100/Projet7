const Sequelize = require("sequelize");
const dotenv = require("dotenv");
dotenv.config();

//CONNECT TO DATABASE USE VARIABLES ENVIRONNEMENT
const database = "Groupomania";
const username = "postgres";
const password = "123postgre";
const host = "127.0.0.1";
const port = 3001;
const dialect = "postgres";
console.log(
  // process.env.DATABASE,
  { username },
  { password },
  { host },
  { port }
);

const sequelize = new Sequelize(database, username, password, {
  host: host,
  port: port,
  dialect: dialect,

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
    console.log("Connection is established correctly");
  })
  .catch((err) => {
    console.error("Connection is not established correctly");
  });

module.exports = sequelize;
