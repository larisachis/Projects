const getWeatherBtn = document.getElementById('getWeatherBtn');
const cityInput = document.getElementById('cityInput');
const weatherResult = document.getElementById('weatherResult');

// API Key de la OpenWeatherMap (înlocuiește cu cheia ta)
const apiKey = 'YOUR_API_KEY';

getWeatherBtn.addEventListener('click', function() {
    const city = cityInput.value;
    if (city) {
        getWeather(city);
    } else {
        alert('Te rog să introduci un oraș!');
    }
});

function getWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Orașul nu a fost găsit');
            }
            return response.json();
        })
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            weatherResult.innerHTML = `<p>${error.message}</p>`;
        });
}

function displayWeather(data) {
    const temperature = data.main.temp;
    const weatherDescription = data.weather[0].description;
    const humidity = data.main.humidity;

    weatherResult.innerHTML = `
        <h2>${data.name}</h2>
        <p>Temperatura: ${temperature} °C</p>
        <p>Condiții: ${weatherDescription}</p>
        <p>Umiditate: ${humidity}%</p>
    `;
}