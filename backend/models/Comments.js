const Sequelize = require('sequelize');
const sequelize = require('../database/sequelize');

const Comments = sequelize.define('Comments', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  text: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});
module.exports = Comments;
