const jsonwebToken = require("jsonwebtoken");

const authenfication = function auth(req, res, next) {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const detoken = jwd.verify(token, "Random_Secret_token");
    const userId = detoken.id;
    if (req.body.userId && req.body.userId !== userId) {
      throw "Invalid user Id";
    } else {
      next();
    }
  } catch {
    res.status(401).json({
      error: new Error("Invalid request !! "),
    });
  }
};
module.exports = authenfication;
