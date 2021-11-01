const express = require('express');

const router = express.Router();
const authenfication = require('../middleware/auth');
const controllers = require('../controllers/comment');

// route GET
router.get('/comments', authenfication, controllers.findComments);
router.get('/posts/:id/comments/:PostId', authenfication, controllers.getPostComments);
router.get('/comment/:id', authenfication, controllers.findComment);
// route POST
router.post('/posts/:id/comments', authenfication, controllers.createComment);

module.exports = router;
