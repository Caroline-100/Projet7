const express = require('express');

const router = express.Router();
const controllers = require('../controllers/user');
const authenfication = require('../middleware/auth');

// api find one user
// route GET
router.get('/', controllers.oneUser);
router.get('/user', authenfication, controllers.allUser);
router.delete('/user/:id', authenfication, controllers.oneUser);

// route POST
router.post('/signup', controllers.signup);
router.post('/login', controllers.login);

module.exports = router;
