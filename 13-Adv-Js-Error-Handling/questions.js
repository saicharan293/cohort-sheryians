

async function getWeather(city){
    try {
        let apiKey = '3e2da34937e7f4fdbb2e839856f80d30';
        let raw = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);

        if(!raw.ok){
            throw new Error("City not found, try Something else");
        }

        let realData = await raw.json();
        console.log(realData)
    } catch (error) {
        console.error(error.message);
    }
}

getWeather("Phil");