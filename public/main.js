console.log("dummy text");

fetch("http://localhost:3000/weather?address=hasselt")
  .then((response) => response.json())
  .then((data) => {
    if (data.error) {
      console.log(data.error);
    } else {
      console.log(data);
    }
  });

const weatherForm = document.querySelector("form");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("works");
});
