const express = require("express");

const app = express();

app.get("", (req, res) => {
  res.send("Hello!");
});

app.get("/help", (req, res) => {
  res.send("Hello from help page!");
});

app.get("/about", (req, res) => {
  res.send("Hello from about page!");
});

app.get("/weather", (req, res) => {
  res.send("Hello from weather page!");
});

app.listen(3000, () => {
  console.log("it is working on http://localhost:3000/");
});
