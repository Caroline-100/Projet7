// const sequelize = require('../databbase/sequelize');
const People = require('./People');
const Post = require('./Post');
const Comments = require('./Comments');

People.hasMany(Post, {
  foreignKey: {
    allowNull: false,
  },
});
Post.belongsTo(People);

People.hasMany(Comments, {
  foreignKey: {
    allowNull: false,
  },

});
Comments.belongsTo(People);

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
  People,
  Post,
  Comments,
};
