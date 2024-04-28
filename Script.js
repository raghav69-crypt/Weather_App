const url =
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "7df495b11dmsh1eadf0101385a63p128cb4jsn6298373ee273",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const weatherfind = (city) => {
  // city will map with cityName in html
  cityName.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      document.getElementById("cloud_pct").innerHTML = response.cloud_pct;
      document.getElementById("feels_like").innerHTML = response.feels_like;
      document.getElementById("humidity").innerHTML = response.humidity;
      document.getElementById("humidity2").innerHTML = response.humidity;
      document.getElementById("max_temp").innerHTML = response.max_temp;
      document.getElementById("min_temp").innerHTML = response.min_temp;
      document.getElementById("sunrise").innerHTML = response.sunrise;
      document.getElementById("sunset").innerHTML = response.sunset;
      document.getElementById("temp").innerHTML = response.temp;
      document.getElementById("temp2").innerHTML = response.temp;
      document.getElementById("wind_degrees").innerHTML = response.wind_degrees;
      document.getElementById("wind_speed").innerHTML = response.wind_speed;
    })
    .catch((err) => console.error(err));
};
// Button based eventlistner , check sumbit id in html
submit.addEventListener("click", (e) => {
  // Prevent Reloading : preventdefault
  e.preventDefault();
  weatherfind(city.value);
});

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }
