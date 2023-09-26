const express = require("express");
const app = express();
const listViewRouter = require("./list-view-router"); 
const listEditRouter = require("./list-edit-router"); 

app.use(express.json());

app.get("/tasks", (req, res) => {
  res.json(tasks);
});

app.use("/list-view", listViewRouter);
app.use("/list-edit", listEditRouter);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Servidor Express en funcionamiento en el puerto ${port}`);
});