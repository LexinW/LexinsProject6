
// Weather API for Atlanta: http://api.openweathermap.org/geo/1.0/direct?q=atlanta,US&appid=1e8a5725497f34dd30e4e8e6028b5a3d


var cityElement = document.getElementById('targetCity');
var tempElement = document.getElementById('cityTemp');
var windElement = document.getElementById('cityWind');
var humidityElement = document.getElementById('cityHumidity');
var searchBox = document.getElementById('citySearchBox');
var searchButton = document.querySelector('.sidebarContent button');
const sidebarButtons = document.querySelectorAll('.btn-secondary');
var forecastContainer = document.querySelector('.forecastContainer');

searchButton.addEventListener('click', () => {

  var cityName = searchBox.value.trim();

  if (cityName !== '') {
    searchBox.value = '';

    fetchWeatherData(cityName)
      .then(data => {
        updateWeatherInfo(data);
      })
      .catch(error => {
        console.log('Error:', error);
      });
  }
});

function fetchWeatherData(cityName) {

  var apiUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=1e8a5725497f34dd30e4e8e6028b5a3d`; // Replace with the Geocoding API endpoint URL

  return fetch(apiUrl)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
    })
    .then(data => {
      if (data.length > 0) {
        var cityInfo = data[0];
        var cityLat = cityInfo.lat;
        var cityLon = cityInfo.lon;

        var weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${cityLat}&lon=${cityLon}&units=imperial&appid=1e8a5725497f34dd30e4e8e6028b5a3d`; // Replace with the Weather API endpoint URL

        return fetch(weatherApiUrl)
          .then(response => {
            if (response.ok) {
              return response.json();
            }
        });
      }
    })
    
}

sidebarButtons.forEach(button => {
    button.addEventListener('click', () => {
      var cityName = button.textContent.trim();
      fetchWeatherData(cityName)
        .then(data => {
         updateWeatherInfo(data);
        })
    });
});

// Update the weather information
function updateWeatherInfo(data) {
  var cityName = data.name;
  var temp = data.main.temp;
  var wind = data.wind.speed;
  var humidity = data.main.humidity;

  cityElement.textContent = cityName;
  tempElement.textContent = `Temp: ${temp}°F`;
  windElement.textContent = `Wind: ${wind} MPH`;
  humidityElement.textContent = `Humidity: ${humidity}%`;

}
