const path = require("path");
const express = require("express");
const request = require("postman-request");

require("dotenv").config();
const url = `http://api.weatherstack.com/current?access_key=${process.env.API_KEY}&query=New%20York`;

request(url, function (error, response, body) {
  console.log("error:", error); // Print the error if one occurred
  console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received

  const data = JSON.parse(body);
});

const app = express();

const port = process.env.PORT || 3000;

const publicDirPath = path.join(__dirname, "../public");

app.use(express.static(publicDirPath));

app.get("/help", (req, res) => {
  res.send("Hello from help page!");
});

app.get("/about", (req, res) => {
  res.send("Hello from about page!");
});

app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: "You must provide an address",
    });
  }

  const url = `http://api.weatherstack.com/current?access_key=${process.env.API_KEY}&query=${req.query.address}`;

  request(url, function (error, response, body) {
    console.log("error:", error); // Print the error if one occurred
    console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received

    const data = JSON.parse(body);

    res.send({
      temperature: data.current.temperature, // automatically converting to Json
      observationTime: data.current.observation_time,
      address: req.query.address.toUpperCase(),
      weatherDescriptions: data.current.weather_descriptions[0],
    });
  });
});

app.listen(port, () => {
  console.log("it is working on http://localhost:" + port);
});
