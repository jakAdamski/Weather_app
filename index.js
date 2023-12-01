const apiUrl =`https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;
const apiKey = "5966d1b384e6807d802ed9193341fe79";
const searchBox = document.querySelector('input');
const searchBtn = document.querySelector('button');
const weatherIcon = document.querySelector('.weather_icon');
async function weatherApp(city){
const response = await fetch(apiUrl + city +`&appid=${apiKey}`);
if(response.status==404){
    document.querySelector('.error_box').style.display = "block";
    document.querySelector('.weather_display').style.display = "none";
}else{
    
var data = await response.json();
console.log(data);
document.querySelector('.location').innerHTML = data.name;
document.querySelector('.temperature').innerHTML = Math.round(data.main.temp) + "°C";
document.querySelector('.temp_min').innerHTML = Math.round(data.main.temp_min) + "°C";
document.querySelector('.temp_max').innerHTML = Math.round(data.main.temp_max) + "°C";
document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
document.querySelector(".wind_speed").innerHTML = Math.round(data.wind.speed) + " km/h";
document.querySelector('.weather_display').style.display = "block";
document.querySelector('.error_box').style.display = "none";
switch (data.weather[0].main) {
    case 'Clear':
        weatherIcon.src = "public/weather-icons/sunny.png"
        break;
    case 'Rain':
        weatherIcon.src = "public/weather-icons/rain.png"
        break;
    case 'Clouds':
        weatherIcon.src = "/public/weather-icons/cloudy.png"
        break;
    case 'Drizzle':
        weatherIcon.src = "/public/weather-icons/drizzle.png"
        break;
    case 'Snow':
        weatherIcon.src = "/public/weather-icons/snow.png"
        break;
    case 'Thunderstorm':
        weatherIcon.src = "/public/weather-icons/thunderstorm.png"
        break;
    default:"";
        break;
}

}
}
searchBtn.addEventListener("click", () => {
    weatherApp(searchBox.value);
    searchBox.value="";
})


searchBox.addEventListener("keyup", function (enterPress){
 if(enterPress.keyCode === 13) {
    enterPress.preventDefault();
    weatherApp(searchBox.value);
    searchBox.value="";
 }
})
    




