const {
  Post,
} = require('../models');

// find one post
const findPost = (req, res) => {
  Post.findOne(
    {
      where: { id: req.params.id },
    },
  ).then((post) => {
    res.json(post);
  }).catch((err) => {
    console.error(err);
  });
};

// api find all POST
const findAlls = (req, res) => {
  Post.findAll()
    .then((users) => { res.json(users); })
    .catch((err) => {
      console.error(err);
    });
};

// create a post
const createPost = (req, res) => {
  console.log(req.body.title, req.body.text);
  console.log('data', req.body.data);

  Post.create({
    title: req.body.title,
    text: req.body.text,
    PersonId: req.context.userId,
    data: req.files,
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
};

module.exports = { createPost, findAlls, findPost };
