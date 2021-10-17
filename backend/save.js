// // {
// //     "development": {
// //       "username": "postgres",
// //       "password": "123postgre",
// //       "database": "postgres",
// //       "host": "127.0.0.1",
// //       "port":3001,
// //       "dialect": "postgres",
// //       "logging": false
// //     },
// //     "test": {
// //       "username": "postgres",
// //       "password": "123postgre",
// //       "database": "database_test",
// //       "host": "127.0.0.1",
// //       "port":3001,
// //       "dialect": "postgres"
// //     },
// //     "production": {
// //       "username": "postgres",
// //       "password": "123postgre",
// //       "database": "database_production",
// //       "host": "127.0.0.1",
// //       "port":3001,
// //       "dialect": "postgres",
// //       "logging": false
// //     }
// //   }
// //   npx sequelize-cli model:generate --name User --attributes email:string,password:string
// "use strict";
// module.exports = {
//   up: async (queryInterface, Sequelize) => {
//     await queryInterface.createTable("user", {
//       id: {
//         allowNull: false,
//         autoIncrement: true,
//         primaryKey: true,
//         type: Sequelize.INTEGER,
//       },
//       email: {
//         type: Sequelize.STRING,
//         allowNull: false,
//         unique: true,
//       },
//       username: {
//         type: Sequelize.STRING,
//         allowNull: false,
//       },
//       password: {
//         type: Sequelize.STRING,
//       },
//       createdAt: {
//         allowNull: false,
//         type: Sequelize.DATE,
//       },
//       updatedAt: {
//         allowNull: false,
//         type: Sequelize.DATE,
//       },
//     });

//     await queryInterface.createTable("post", {
//       id: {
//         allowNull: false,
//         autoIncrement: true,
//         primaryKey: true,
//         type: Sequelize.INTEGER,
//       },
//       user_id: {
//         type: Sequelize.INTEGER,
//         allowNull: false,
//         references: {
//           model: "user",
//           key: "id",
//         },
//       },
//       post: {
//         type: Sequelize.STRING,
//         allowNull: true,
//       },
//       createdAt: {
//         allowNull: false,
//         type: Sequelize.DATE,
//       },
//       updatedAt: {
//         allowNull: false,
//         type: Sequelize.DATE,
//       },
//     });
//   },
//   down: async (queryInterface, Sequelize) => {
//     await queryInterface.dropTable();
//   },
// };
// // npx sequelize-cli db:migrate:undo: --to 20211013080446-newInit.js
