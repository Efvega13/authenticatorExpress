const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");


const users = [
  {
    username: "user1",
    password: "password1",
  },
  {
    username: "user2",
    password: "password2",
  },
];


const secretKey = process.env.SECRET_KEY; 

router.post("/login", (req, res) => {
  const { username, password } = req.body;


  const user = users.find((user) => user.username === username && user.password === password);

  if (!user) {
    return res.status(401).json({ error: "Incorrect credentials" });
  }

  const token = jwt.sign({ username: user.username }, secretKey);

  res.json({ token });
});

module.exports = router;