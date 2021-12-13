// const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const {
  People,
} = require('../models');

const signup = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: ' Content can not be empty',
    });
  } else {
    bcrypt
      .hash(req.body.password, 10)
      .then((hash) => {
        People.create({
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
};

const login = (req, res) => People.findOne({
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
  });

const oneUser = (request, response) => {
  People.findOne({ where: { id: request.params.id } })
    .then(() => {
      console.log('one user', request.params.id);
      People.destroy({ where: { id: request.params.id } })
        .then(() => {
          response.status(200).json({ message: 'Delete People' });
        })
        .catch((error) => {
          response.status(400).json({ error });
        });
    })
    .catch((err) => {
      console.error(err);
    });
};

const allUser = (req, res) => {
  People.findAll()
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      console.error(err);
    });
};

// const deleteUser = (req, res) => {
//   People.findOne({ id: req.params.id })
//     .then((users) => {
//       res.json(users);
//     })
//     .catch((err) => {
//       console.error(err);
//     });
// };


module.exports = {
  allUser, oneUser, login, signup,
};
