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
