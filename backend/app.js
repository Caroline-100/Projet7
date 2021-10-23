const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
// const file_System = require('file-system');
// const multer = require('./middleware/multer');
const authenfication = require('./middleware/auth');
const {
  Person,
  Post,
} = require('./models');

const app = express();
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization',
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS',
  );
  next();
});
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use("/api/auth", userRouter);
app.get('/', (request, response) => {
  Person.findOne()
    .then((users) => {
      response.json(users);
    })
    .catch((err) => {
      console.error(err);
    });
});

app.post('/signup', (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: ' Content can not be empty',
    });
  } else {
    bcrypt
      .hash(req.body.password, 10)
      .then((hash) => {
        Person.create({
          email: req.body.email,
          username: req.body.username,
          password: hash,
        })
          .then(() => {
            res.sendStatus(201);
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

// app.get('/setcookie', (req, res) => {
//   res.cookie('Cookie token name`,a, {
//     maxAge: 5000,
//     // expires works the same as the maxAge
//     expires: new Date('01 12 2021'),
//     secure: true,
//     httpOnly: true,
//     sameSite: 'lax',
//   });
//   res.send('Cookie have been saved successfully');
// });
app.post('/login', (req, res) => Person.findOne({
  where: {
    username: req.body.username,
    // password: req.body.password,
  },
})
  .then((user) => {
    console.log(user);
    if (!user) {
      res.status(401).json({ message: 'User Not found' });
    }
    // check if pass are founded in db and request.
    console.log('mdp :', req.body.password, user, user.dataValues.id);
    // use bcrypt for compare password exists
    return bcrypt
      .compare(req.body.password, user.dataValues.password)
      // promise if is bcript is good
      .then((valid) => {
        // assign a token of validation at user_id,
        const accessToken = jwt.sign(
          { userId: user.dataValues.id },
          'Random_Secret_token',
          { expiresIn: '24h' },
        );
        if (!valid) {
          return res.status(401).json({ message: 'password invalid' });
        }
        // if compare is ok and token is ok send token
        return res.status(200).json(accessToken);
      })
      // pb connexion (error server)
      .catch((error) => {
        res.status(500).send(error);
      });
  })
  // catch error if user has a problem.
  .catch((error) => {
    res.send(error);
  }));
// post articles with authenfication and add id of in database posts
app.post('/posts', authenfication, (req, res) => {
  // if (req.file) {
  //   console.log('file');
  // } else {
  //   console.error('no req.file');
  // }
  Post.create({
    text: req.body.text,
    PersonId: req.context.userId,
  })
  // data:`${req.protocol}://${req.get('host')}/image/${req.file.filename}`,
  // if the post is created return a json postCreated
    .then((postCreated) => {
      console.log({ postCreated });

      console.log({ postCreated: postCreated.toJSON() });
      res.send(postCreated);
    })
    // if the post isn't created return error
    .catch((error) => {
      console.error(error);
      res.sendStatus(400);
    });
});

module.exports = app;
