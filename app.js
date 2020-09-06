const request = require("postman-request");

require("dotenv").config(); // to hide api-key

const url = `http://api.weatherstack.com/current?access_key=${process.env.API_KEY}&query=New%20York`; // &units=m
