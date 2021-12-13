const express = require('express');

// const multer = require('multer');
const router = express.Router();
const authenfication = require('../middleware/auth');
const multer = require('../middleware/multer');
const controllers = require('../controllers/post');
// const imageupload = multer({ dest: 'image' });

// router.post('/post', authenfication, controllers.findAll);
// route POST ok
router.post('/posts', authenfication, multer, controllers.createPost);
// imageupload.single('image')
// route GET ok
router.get('/posts/:id', authenfication, controllers.findPost);
// route GET ok
router.get('/posts', authenfication, controllers.findAlls);
// router.get('/id');
module.exports = router;
