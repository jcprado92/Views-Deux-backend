const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const viewsController = require("./controllers/viewController");
app.use("/views", viewsController);

app.get("/", (req, res) => {
  res.send("Welcome to Vieeeeews");
});

app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

module.exports = app;
