const jwt = require('jsonwebtoken');

const authenfication = function auth(req, res, next) {
  try {
    const token = req.headers.authorization.split(' ')[1];

    const detoken = jwt.verify(token, 'Random_Secret_token');

    const { userId } = detoken;
    // if (new Date(iat) > new Date()) { TODO: verify validity??
    //   res.status(401).json({
    //     error: new Error('Expired Token'),
    //   });
    //   return;
    // }

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
