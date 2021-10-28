const sequelize = require('../databbase/sequelize');
const Person = require('./Person');
const Post = require('./Post');
const Comments = require('./Comments');

Person.hasMany(Post, {
  foreignKey: {
    allowNull: false,
  },
});
Post.belongsTo(Person);

Person.hasMany(Comments, {
  foreignKey: {
    allowNull: false,
  },

});
Comments.belongsTo(Person);

Post.hasMany(Comments, {
  foreignKey: {
    allowNull: false,
  },
});
Comments.belongsTo(Post);

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
  Comments,
};
