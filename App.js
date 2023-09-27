const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());


const tasks = [
  {
    id: 1,
    title: "pintar un tanque",
    completed: false,
  },
  {
    id: 2,
    title: "Crear una aplicación",
    completed: true,
  },
  {
    id: 3,
    title: "Completar perfil linkedin",
    completed: false,
  },
];


app.get("/tasks", (req, res) => {
  res.status(200).json({ tasks });
});


app.get("/tasks/completed", (req, res) => {
  const completedTasks = tasks.filter((task) => task.completed);
  res.status(200).json({ completedTasks });
});


app.get("/tasks/incomplete", (req, res) => {
  const incompleteTasks = tasks.filter((task) => !task.completed);
  res.status(200).json({ incompleteTasks });
});


app.get("/tasks/:id", (req, res) => {
  const taskId = parseInt(req.params.id);
  const task = tasks.find((task) => task.id === taskId);

  if (!task) {
    return res.status(404).json({ error: "Task not found" });
  }

  res.status(200).json({ task });
});


app.post("/tasks", (req, res) => {
  const newTask = req.body;
  newTask.id = tasks.length + 1;
  tasks.push(newTask);
  res.status(201).json({ task: newTask });
});


app.put("/tasks/:id", (req, res) => {
  const taskId = parseInt(req.params.id);
  const updatedTask = req.body;

  const index = tasks.findIndex((task) => task.id === taskId);

  if (index === -1) {
    return res.status(404).json({ error: "Task not found" });
  }

  tasks[index] = { ...tasks[index], ...updatedTask };
  res.status(200).json({ task: tasks[index] });
});


app.delete("/tasks/:id", (req, res) => {
  const taskId = parseInt(req.params.id);
  const index = tasks.findIndex((task) => task.id === taskId);

  if (index === -1) {
    return res.status(404).json({ error: "Task not found" });
  }

  const deletedTask = tasks.splice(index, 1);
  res.status(200).json({ task: deletedTask[0] });
});

app.listen(port, () => {
  console.log(`Express server running at the port ${port}`);
});