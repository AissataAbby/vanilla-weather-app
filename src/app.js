function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let dateOfTheDayElement = document.querySelector("#dateOfTheDay");
  let descriptionElement = document.querySelector("#description");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  dateOfTheDayElement.innerHTML = response.data.timezone;
  descriptionElement.innerHTML = response.data.weather[0].description;
}

let apiKey = "90e600906859449d4dbb9a39b1b35129";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=monaco&appid=${apiKey}&units=metric`;

console.log(apiUrl);

axios.get(apiUrl).then(displayTemperature);
