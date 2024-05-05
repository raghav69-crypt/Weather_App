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

      if(city.toLowerCase() === "dwarka") 
      {
      document.getElementById("cloud_pctdwarka").innerHTML = response.cloud_pct;
      document.getElementById("feels_dwarka").innerHTML = response.feels_like;
      document.getElementById("Dwarka_humidity").innerHTML = response.humidity;
      document.getElementById("Dwarka_max").innerHTML = response.max_temp;
      document.getElementById("Dwarka_min").innerHTML = response. min_temp;
      document.getElementById("Dwarka_sunrise").innerHTML = response.sunrise;
      document.getElementById("Dwarka_set").innerHTML = response.sunset;
      document.getElementById("Dwarka_temp").innerHTML = response.wind_degrees;
      document.getElementById("Dwarka_wind").innerHTML = response.wind_speed;
      
      }

      else if (city.toLowerCase() === "ayodhya"){
        document.getElementById("cloud_pctAyodhya").innerHTML = response.cloud_pct;
        document.getElementById("feels_Ayodhya").innerHTML = response.feels_like;
        document.getElementById("ayodgya_humidity").innerHTML = response.humidity;
        document.getElementById("ayodgya_max").innerHTML = response.max_temp;
        document.getElementById("ayodgya_min").innerHTML = response. min_temp;
        document.getElementById("ayodgya_sunrise").innerHTML = response.sunrise;
        document.getElementById("ayodgya_set").innerHTML = response.sunset;
        document.getElementById("ayodgya_temp").innerHTML = response.wind_degrees;
        document.getElementById("ayodhya_wind").innerHTML = response.wind_speed;
      }

      else if (city.toLowerCase() === "ujjain") {
        document.getElementById("cloud_pctujjain").innerHTML = response.cloud_pct;
        document.getElementById("feels_ujjain").innerHTML = response.feels_like;
        document.getElementById("ujjain_humidity").innerHTML = response.humidity;
        document.getElementById("ujjain_max").innerHTML = response.max_temp;
        document.getElementById("ujjain_min").innerHTML = response. min_temp;
        document.getElementById("ujjain_sunrise").innerHTML = response.sunrise;
        document.getElementById("ujjain_set").innerHTML = response.sunset;
        document.getElementById("ujjain_temp").innerHTML = response.wind_degrees;
        document.getElementById("ujjain_wind").innerHTML = response.wind_speed;
      }

      else if (city.toLowerCase() === "haridwar") {
        document.getElementById("cloud_pctHaridwar").innerHTML = response.cloud_pct;
        document.getElementById("feels_Haridwar").innerHTML = response.feels_like;
        document.getElementById("Haridwar_humidity").innerHTML = response.humidity;
        document.getElementById("Haridwar_max").innerHTML = response.max_temp;
        document.getElementById("Haridwar_min").innerHTML = response. min_temp;
        document.getElementById("Haridwar_sunrise").innerHTML = response.sunrise;
        document.getElementById("Haridwar_set").innerHTML = response.sunset;
        document.getElementById("Haridwar_temp").innerHTML = response.wind_degrees;
        document.getElementById("Haridwar_wind").innerHTML = response.wind_speed;
      }
      else if (city.toLowerCase() === "varanasi") {
        document.getElementById("cloud_pctVaranasi").innerHTML = response.cloud_pct;
        document.getElementById("feels_Varanasi").innerHTML = response.feels_like;
        document.getElementById("Varanasi_humidity").innerHTML = response.humidity;
        document.getElementById("Varanasi_max").innerHTML = response.max_temp;
        document.getElementById("Varanasi_min").innerHTML = response. min_temp;
        document.getElementById("Varanasi_sunrise").innerHTML = response.sunrise;
        document.getElementById("Varanasi_set").innerHTML = response.sunset;
        document.getElementById("Varanasi_temp").innerHTML = response.wind_degrees;
        document.getElementById("Varanasi_wind").innerHTML = response.wind_speed;
      }
      else if (city.toLowerCase() === "mathura") {
        document.getElementById("cloud_pctMathura").innerHTML = response.cloud_pct;
        document.getElementById("feels_Mathura").innerHTML = response.feels_like;
        document.getElementById("Mathura_humidity").innerHTML = response.humidity;
        document.getElementById("Mathura_max").innerHTML = response.max_temp;
        document.getElementById("Mathura_min").innerHTML = response. min_temp;
        document.getElementById("Mathura_sunrise").innerHTML = response.sunrise;
        document.getElementById("Mathura_set").innerHTML = response.sunset;
        document.getElementById("Mathura_temp").innerHTML = response.wind_degrees;
        document.getElementById("Mathura_wind").innerHTML = response.wind_speed;
        
      }

      // document.getElementById("cloud_pctUjjain").innerHTML = response.cloud_pct;
      // document.getElementById("cloud_pctHaridwar").innerHTML = response.cloud_pct;
      // document.getElementById("cloud_pctVaranasi").innerHTML = response.cloud_pct;
      // document.getElementById("cloud_pctMathura").innerHTML = response.cloud_pct;
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
