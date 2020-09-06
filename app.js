const request = require("postman-request");

require("dotenv").config(); // to hide api-key

const url = `http://api.weatherstack.com/current?access_key=${process.env.API_KEY}&query=New%20York`; // &units=m
request(url, function (error, response, body) {
  console.log("error:", error); // Print the error if one occurred
  console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received

  const data = JSON.parse(body);
  console.log(data.current.temperature);
});
