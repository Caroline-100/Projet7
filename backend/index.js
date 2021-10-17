const sequelize = require("./databbase/sequelize");
const Person = require("./models/Person");
const Post = require("./models/Post");
// Person.hasOne(Post, { foreignKey });
Person.hasOne(Post);
Post.belongsTo(Person);

sequelize
  .sync({ force: true })
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.error(err);
  });
