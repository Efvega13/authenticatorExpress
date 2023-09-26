const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

require("dotenv").config();

const { validateHTTPMethods } = require("./http-method-middleware");
const listViewRouter = require("./list-view-router");
const listEditRouter = require("./list-edit-router");
const authRouter = require("./auth-router");

const { authenticateToken } = require("./auth-middleware");

app.use(express.json());
app.use(validateHTTPMethods);
app.use("/list-view", listViewRouter);
app.use("/list-edit", listEditRouter);
app.use("/login", authRouter);

app.get("/ruta-protegida", authenticateToken, (req, res) => {
  res.json({ message: "Ruta protegida accedida correctamente", user: req.user });
});

app.listen(port, () => {
  console.log(`Servidor Express en funcionamiento en el puerto ${port}`);
});