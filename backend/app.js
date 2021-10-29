const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
// const multer = require('./middleware/multer');
const authenfication = require('./middleware/auth');
const {
  Person,
  Post,
} = require('./models');
// const upload = require('express-fileupload');
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
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use("/api/auth", userRouter);

// api find one user
app.get('/', (request, response) => {
  Person.findOne()
    .then((users) => {
      response.json(users);
    })
    .catch((err) => {
      console.error(err);
    });
});
// api find all POST
app.get('/post', authenfication, (req, res) => {
  Post.findAll()
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      console.error(err);
    });
});
// api find all USER
app.get('/user', authenfication, (req, res) => {
  Person.findAll()
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      console.error(err);
    });
});
// find one post
app.get('/post/:id', authenfication, (req, res) => {
  Post.findOne(
    {
      where: { id: req.params.id },
    },
  ).then((post) => {
    res.json(post);
  }).catch((err) => {
    console.error(err);
  });
});
// signup
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
//login
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
  Post.create({
    text: req.body.text,
    PersonId: req.context.userId,
  })
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
// // multer
// app.post('/images', multer, (req, res) => {
//   if (req.body) {
//     console.log(`image${req.body}`);
//   } else {
//     console.error('noimage');
//   }
//   // ??????
//   // const imageObject = JSON.parse(req.body.data);
//   // console.log(imageObject);
//   // Post.create({
//   //   text: req.body.text,
//   //   PersonId: req.context.userId,
//   //   data: `${req.protocol}://${req.get('host')}/image/${req.file.filename}`,
//   // }).then((imagecreated) => {
//   //   console.log(imagecreated);
//   //   console.log({ imagecreated: imagecreated.toJSON() });
//   //   res.send(imagecreated);
//   // }).catch((error) => {
//   //   console.error(error);
//   //   res.sendStatus(400);
//   // });
// });


module.exports = app;

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
