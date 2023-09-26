const express = require("express");
const app = express();

const { validateHTTPMethods } = require("./http-method-middleware");

app.use(express.json());
app.use(validateHTTPMethods); 

const listViewRouter = require("./list-view-router");
const listEditRouter = require("./list-edit-router");

app.use("/list-view", listViewRouter);
app.use("/list-edit", listEditRouter);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Servidor Express en funcionamiento en el puerto ${port}`);
});