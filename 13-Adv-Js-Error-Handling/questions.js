

function getWeather(city){
    let apiKey = '3e2da34937e7f4fdbb2e839856f80d30';
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
    .then((raw)=> raw.json())
    .then((res)=> console.log(res.weather[0].main));
}

getWeather("Kurnool");