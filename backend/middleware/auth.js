const jwt = require('jsonwebtoken');

const authenfication = function auth(req, res, next) {
  try {
    const token = req.headers.authorization.split(' ')[1];
    console.log({ token });
    const detoken = jwt.verify(token, 'Random_Secret_token');

    const { userId } = detoken;

    if (!req.context) {
      req.context = {};
    }
    req.context.userId = userId;

    next();
  } catch (error) {
    console.error(error);
    res.sendStatus(401);
  }
};
module.exports = authenfication;
