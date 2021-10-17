const Sequelize = require("sequelize");
const sequelize = require("../databbase/sequelize");
const Person = require("./Person");

const Post = sequelize.define("Post", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    // references: {
    //   model: Person,
    //   key: "id",
    // },
  },
  text: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Post;
