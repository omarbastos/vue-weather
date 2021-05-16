import Vue from "vue";
const API_KEY = process.env.VUE_APP_API_KEY;
class OpenWeatherMap extends XMLHttpRequest {
  getLocation = ({ city = "Bogotá", countryCode = "co" }) => {
    const xhr = this;
    return new Promise(function (resolve, reject) {
      xhr.open(
        "GET",
        `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&units=metric&APPID=${API_KEY}`
      );

      xhr.onreadystatechange = function () {
        var DONE = 4;
        var OK = 200;
        if (xhr.readyState === DONE) {
          if (xhr.status === OK) {
            resolve(JSON.parse(xhr.responseText));
          } else {
            reject("Error: " + xhr.status);
          }
        }
      };
      xhr.send();
    });
  };

  getForecast = () => {
    const xhr = this;
    return new Promise(function (resolve, reject) {
      const LAT = 4.6097;
      const LON = -74.0817;
      xhr.open(
        "GET",
        `https://api.openweathermap.org/data/2.5/onecall?lat=${LAT}&lon=${LON}&units=metric&appid=${API_KEY}`
      );

      xhr.onreadystatechange = function () {
        var DONE = 4;
        var OK = 200;
        if (xhr.readyState === DONE) {
          if (xhr.status === OK) {
            resolve(JSON.parse(xhr.responseText));
          } else {
            reject("Error: " + xhr.status);
          }
        }
      };
      xhr.send();
    });
  };
}

Vue.prototype.$apiService = OpenWeatherMap;
