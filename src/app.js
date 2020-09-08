const path = require("path");
const express = require("express");

console.log(__dirname);
console.log();

const app = express();

const publicDirPath = path.join(__dirname, "../public");

app.use(express.static(publicDirPath));

app.get("/help", (req, res) => {
  res.send("Hello from help page!");
});

app.get("/about", (req, res) => {
  res.send("Hello from about page!");
});

app.get("/weather", (req, res) => {
  res.send({
    name: "UFUK", // automatically converting to Json
    age: 28,
  });
});

app.listen(3000, () => {
  console.log("it is working on http://localhost:3000/");
});
