//Поскольку широта и долгота города Москва заданы в градусах, минутах и секундах, предварительно необходимо перевести их 
//в градусы с точностью до третьего знака после запятой
fetch("https://api.openweathermap.org/data/2.5/weather?lat=55.752&lon=37.616&appid=d93399a3bb9eb3bcd4b3c70abce24776")
.then(function(resp){return resp.json()})
.then(function(data){
    document.querySelector('.city-name').textContent = "City name: " + data.name;
    document.querySelector('.temp').textContent = "Temperature: " + Math.round(data.main.temp - 273) + '°C';
    document.querySelector('.weather').textContent = "Decription: " + data.weather[0].description;
    document.querySelector('.icon').innerHTML = `<img src = 'https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png'>`;
    document.querySelector('.wind_speed').textContent = "Wind speed: " + data.wind.speed + " m/s";
    document.querySelector('.humidity').textContent = "Humidity: " + data.main.humidity + " %";
    document.querySelector('.country').textContent = "Country: " + data.sys.country;
    document.querySelector('.sunrise').textContent = "Sunrise: " + new Date(data.sys.sunrise*1000);
    document.querySelector('.sunset').textContent =  "Sunset: " + new Date(data.sys.sunset*1000);
    console.log(data
        )})