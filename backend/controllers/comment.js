const { Comments, Post } = require('../models');
// all comments
const findComments = (req, res) => {
  Comments.findAll().then((comment) => {
    res.json(comment);
  }).catch((err) => {
    console.error(err);
  });
};
// one comment by id
const findComment = (req, res) => {
  Comments.findOne(
    {
      where: { id: req.params.id },
    },
  ).then((comment) => {
    res.json(comment);
  }).catch((err) => {
    console.error(err);
  });
};
// ex: All comments of Post 1
const getPostComments = (req, res) => {
  Post.findOne(
    {
      where: { id: req.params.id },
    },
  );
  Comments.findAll(
    {
      where: { PostId: req.params.PostId },
    },
  ).then((comment) => {
    res.json(comment);
  }).catch((err) => {
    console.error(err);
  });
};

const createComment = (req, res) => {
  console.log(req.params);
  Comments.create({
    text: req.body.text,
    PersonId: req.context.userId,
    PostId: req.params.id,
  })
    // if the post is created return a json commentCreated
    .then((commentCreated) => {
      console.log({ commentCreated });
      console.log({ commentCreated: commentCreated.toJSON() });
      res.send(commentCreated);
    })
    // if the post isn't created return error
    .catch((error) => {
      console.error(error);
      res.sendStatus(400);
    });
};

module.exports = {
  createComment, getPostComments, findComment, findComments,
};
