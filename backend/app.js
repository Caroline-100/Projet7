const express = require("express");
const app = express();
const authentification = require("./middleware/auth");
const jsonwebToken = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const bodyParser = require("body-parser");
const authenfication = require("./middleware/auth");
const Person = require("./models/Person");
const Posts = require("./models/Post");
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use("/api/auth", userRouter);
app.get("/", (request, response) => {
  Person.findOne()
    .then((users) => {
      response.json(users);
    })
    .catch((err) => {
      console.error(err);
    });
});

app.post("/signup", (req, res, next) => {
  if (!req.body) {
    res.status(400).send({
      message: " Content can not be empty",
    });
  } else {
    bcrypt
      .hash(req.body.password, 10)
      .then(async (hash) => {
        await Person.create({
          email: req.body.email,
          username: req.body.username,
          password: hash,
        })
          .then(() => {
            res.status(200).send({ message: "usr create" });
          })
          .catch((error) => {
            console.error(error);
            res.status(400).send(error.message);
          });
      })
      .catch((error) => {
        console.error(error);
        res.status(400).send(error.message);
      });
  }
});

// app.put("/users/:id", async (req, res, next) => {
//   const updatedUser = await db.Person.update(
//     { email: req.body.email },
//     { where: { id: req.params.id } }
//   ).catch((error) => {
//     console.error(error);
//     res.send(500);
//   });
//   console.log({ updatedUser });
//   res.send(updatedUser);
// });

// // .update({ email: req.body.email }, { where: { id: req.body.id } })
app.post("/login", async (req, res, next) => {
  //found the user
  await Person.findOne({
    where: {
      username: req.body.username,
      // password: req.body.password,
    },
  })
    .then((user) => {
      console.log(user);
      if (!user) {
        return res.status(401).json({ message: "User Not found" });
      } else {
        console.log("mdp :", req.body.password, user, user.dataValues.id);
        bcrypt
          .compare(req.body.password, user.dataValues.password)
          .then((valid) => {
            const accessToken = jsonwebToken.sign(
              { userId: user.dataValues.id },
              "accessTokenSecret"
            );
            res.status(200).json(accessToken);
            if (!valid) {
              return res.status(401).json({ message: "password invalid" });
            } else {
              return res.status(201).json({ message: "password valid" });
            }
          })
          // pb connexion (error server)
          .catch((error) => {
            res.status(500).send(error);
          });
      }
    })
    .catch((error) => {
      res.send(error);
    });
});
// quand je cree un post, je veux identifier quel user
// est authentifier pour ajouter l'id du user dans ma table post
app.post("/posts", (req, res, next) => {
  //   if (req.body.post) {
  //   console.log(`body ${req.body.post});`);
  Posts.create({
    text: "req.body.text",
  })
    .then(() => {
      res.status(200).send({ message: `send data db ${Posts}` });
    })
    .catch((error) => {
      res.status(400).send({ message: error });
    });
  //   } else {
  // console.error("no body, help !");
  //   }
});
// app.get("/posts");
module.exports = app;
// //npx sequelize db:migrate --name "my-first-migration"
