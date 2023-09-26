const jwt = require("jsonwebtoken");
const secretKey = process.env.SECRET_KEY;

function authenticateToken(req, res, next) {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ error: "Unauthorized access. A token is required." });
  }

  jwt.verify(token, secretKey, (err, user) => {
    if (err) {
      return res.status(403).json({ error: "Invalid or expired token." });
    }

    req.user = user;
    next();
  });
}

module.exports = {
  authenticateToken,
};