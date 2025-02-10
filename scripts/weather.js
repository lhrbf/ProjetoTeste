const latitude = localStorage.getItem("latitude");
const longitude = localStorage.getItem("longitude");

if (latitude && longitude) {
    const urlWeather = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;

    axios.get(urlWeather)
        .then(response => {
            const data = response.data;
            console.log(data);
            const weatherCode = data.current_weather.weathercode;
            console.log(weatherCode);
            const description = getWeatherDescription(weatherCode);
            console.log(description);

            const weatherInfo = getWeatherDescription(weatherCode);

            document.getElementById("weather-info").innerHTML = `
                <p>${weatherInfo.icon}</p>
                <p><strong>${weatherInfo.description}</strong></p>
            `;
        })
        .catch(error => { 
            console.error("Erro ao buscar dados:", error);
        });
} 
        
else{
        console.error("Latitude e Longitude não encontradas.");
    }

