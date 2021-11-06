const express = require('express');

const router = express.Router();
const authenfication = require('../middleware/auth');
const controllers = require('../controllers/post');

// router.post('/post', authenfication, controllers.findAll);
// route POST
router.post('/posts', authenfication, controllers.createPost);

// route GET
router.get('/posts/:id', authenfication, controllers.findPost);
router.get('/posts', authenfication, controllers.findAlls);
// router.get('/id');
module.exports = router;
