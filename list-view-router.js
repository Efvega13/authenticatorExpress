
const express = require("express");
const router = express.Router();

const tasks = [
  {
    id: "1",
    isCompleted: false,
    description: "pintar un tanque",
  },
  {
    id: "2",
    isCompleted: true,
    description: "crear una aplicacion",
  },
];

router.get("/completed", (req, res) => {
  const completedTasks = tasks.filter((task) => task.isCompleted);
  res.json(completedTasks);
});

router.get("/incomplete", (req, res) => {
  const incompleteTasks = tasks.filter((task) => !task.isCompleted);
  res.json(incompleteTasks);
});

module.exports = router;  