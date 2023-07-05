
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0dedb8bbd8msh772b61f0fdf63f6p198694jsn9bb2ff8c8069',
		'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
	}
};


fetch('https://open-weather13.p.rapidapi.com/city/delhi', options)
    .then(response => response.json())
    .then(response => {


        console.log(response)
        name = response.name
        lon = response.lon
        lat = response.lat
        temp = response.temp
        feels_like = response.feels_like
        temp_min = response.temp_min
        temp_max = response.temp_max
        pressure = response.pressure
        humid = response.humid
        visibility = response.visibility
        wind = response.wind
        speed = response.speed
        country = response.country
        sunrise = response.sunrise
        sunset = response.sunset
    })
    .catch(err => console.error(err));


