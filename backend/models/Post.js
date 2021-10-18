const Sequelize = require('sequelize');
const sequelize = require('../databbase/sequelize');

const Post = sequelize.define('Post', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  text: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Post;
