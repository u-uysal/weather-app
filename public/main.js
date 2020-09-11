// manipulate data by using dom

const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const adress = document.getElementById("address");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");
const time = document.getElementById("time");
const errorForm = document.getElementById("error");

const infoSec = document.getElementById("info");

// add string field if something goes wrong
errorForm.textContent = "";

// check your data contains something except letters
let hasOnlyLetter = /^[a-zA-Z]/;

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // get value which is user inputs
  const location = search.value;

  async function fetchText() {
    // if input empty
    if (location.length === 0) {
      errorForm.textContent = "Oops! Something went wrong";

      // hide other informations
      infoSec.classList.add("hidden");
    } else if (!hasOnlyLetter.test(location)) {
      // if user input undediserable value

      errorForm.textContent = "Please enter valid locations";
    } else {
      infoSec.classList.remove("hidden");

      errorForm.textContent = "";
      let response = await fetch(`/weather?address=${location}`);

      let data = await response.json();

      adress.textContent = `Location : ${data.address}`;
      temperature.textContent = `Temperature : ${data.temperature}`;

      description.textContent = `Forecast : ${data.weatherDescriptions}`;
      time.textContent = `Time : ${data.observationTime}`;
    }
  }

  fetchText();
});
