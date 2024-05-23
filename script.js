var btn = document.getElementById("fetchButton");
var temp = document.getElementById("temp");

btn.addEventListener("click", fetchData);

// Fetching data from an API endpoint
function fetchData() {
  var city = document.getElementById("city");
  var api =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city.value +
    "&appid=9232cbf8585ae81c627da087ac4322d9";
  fetch(api)
    .then((response) => {
      if (!response.ok) {
        console.error("city is not found!");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      temp.innerText = data.main.temp;
    })
    .catch((error) => {
      console.error("city is not found!");
    });
}
