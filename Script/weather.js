// Här ersätter du med din egen OpenWeatherMap API-nyckel
const apiKey = 'e0db4cc589f65979b78f533e71f5a41b';
const weatherIconElement = document.getElementById('weather-icon');
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');

// Funktion för att hämta väderdata från OpenWeatherMap baserat på geolokalisering
function getWeatherByLocation(latitude, longitude) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            // Uppdatera temperatur och beskrivning
            temperatureElement.textContent = `${Math.round(data.main.temp)}°C`;
            descriptionElement.textContent = data.weather[0].description;

            // Uppdatera vädersymbol
            const iconCode = data.weather[0].icon;
            const iconUrl = `https://openweathermap.org/img/w/${iconCode}.png`;
            weatherIconElement.src = iconUrl;
        })
        .catch((error) => {
            console.error('Det gick inte att hämta väderdata: ', error);
        });
}

// Funktion för att hämta användarens geografiska position
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            // Hämta väderdata baserat på användarens plats
            getWeatherByLocation(latitude, longitude);
        });
    } else {
        console.error('Geolokalisering stöds inte av din webbläsare.');
    }
}

// Uppdatera väderdatan när sidan laddas
getLocation();