async function WeatherApp(){
const response = await fetch('https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={APIKeY}');
var data = await response.json();
console.log(data);
}







WeatherApp();