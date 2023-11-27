let now = new Date();
function currentDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[now.getDay()];
  let hour = now.getHours();
  let minutes = now.getMinutes();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hour < 10) {
    hour = `0${hour}`;
  }
  let formattedDate = `${day} ${hour}:${minutes}`;

  return formattedDate;
}
let currentDay = document.querySelector("#current-date");
currentDay.innerHTML = currentDate(now);

let searchCity = document.querySelector("#search-form");
searchCity.addEventListener("submit", function (event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let h1 = document.querySelector("#current-city");
  h1.innerHTML = searchInput.value;

  let city = searchInput.value;
  let apiKey = "317afccdd083ao7966cf003b44bt370b";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  function displayTemp(response) {
    let temperature = Math.round(response.data.temperature.current);
    let temperatureValue = document.querySelector(".current-temperature-value");
    temperatureValue.innerHTML = temperature;
  }

  axios.get(apiUrl).then(displayTemp);
});
