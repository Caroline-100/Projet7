const Sequelize = require('sequelize');
const sequelize = require('../databbase/sequelize');

const Post = sequelize.define('Post', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  text: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  data: {
    type: Sequelize.STRING,
  },
});

module.exports = Post;
