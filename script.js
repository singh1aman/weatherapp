

//https://api.openweathermap.org/data/2.5/weather?lat=28.7041&lon=77.1025&appid=f5da78620518493f8cc6c6f9a1bed2d9

let weather = {
  "api key": "f5da78620518493f8cc6c6f9a1bed2d9",

  fetchWeather: function (lat, long) {
    // lat = 28.7041;
    // long = 77.1025;
    const successCallback = (position) => {
      let lat = position.coords.latitude;
      let long = position.coords.longitude;

      fetch(
        "https://api.openweathermap.org/data/2.5/weather?lat=" +
          lat +
          "&lon=" +
          long +
          "&units=metric&appid=f5da78620518493f8cc6c6f9a1bed2d9"
      )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    };
    const errorCallback = (error) => {
      console.error(error);
    };
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  },
  displayWeather: function (data) {
    const { name } = data;
    const { temp, temp_min, temp_max } = data.main;
    const { country } = data.sys;
    // console.log(name, temp, country);
    document.getElementById("temp").innerText= `temperature: ${temp}`
    document.getElementById("city").innerHTML= `city: ${name}`
    document.getElementById("country").innerText= `country: ${country}`
    document.getElementById("high").innerText= `temp_Max: ${temp_max}`
    document.getElementById("low").innerText= `temp_Min: ${temp_min}`
        


  },

};
weather.fetchWeather()



