const sequelize = require('../databbase/sequelize');
const Person = require('./Person');
const Post = require('./Post');

Person.hasMany(Post, {
  foreignKey: {
    allowNull: false,
  },
});
Post.belongsTo(Person);

// sequelize
//   .sync(
//     { force: true },
//   )
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

module.exports = {
  Person,
  Post,
};
