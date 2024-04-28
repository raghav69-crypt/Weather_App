const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7df495b11dmsh1eadf0101385a63p128cb4jsn6298373ee273',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi" , options)
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.log(err));
// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }