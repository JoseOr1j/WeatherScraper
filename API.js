fetch('https://ipapi.co/json/')
    .then(res => res.json())
    .then(data => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${data.city}&appid=b96cecba1d08b53208f047c49b29612f`)
            .then(response => response.json())
            .then(result => {
                document.querySelector('#card').innerHTML = (`
                <h2>${result.name}, ${result.sys.country}</h2>
                <div class="weather">
                  <h3>Humidity:</h3> ${result.main.humidity}
                </div>
                <div class="weather">
                  <h3>Wind Speed:</h3> ${result.wind.speed}
                </div>
                <div class="weather">
                  <h3>Min Temp:</h3> ${Math.floor((result.main.temp_min - 32) * 5 / 9)}F
                </div>
                <div class="weather">
                  <h3>Max Temp:</h3> ${Math.floor((result.main.temp_max - 32) * 5 / 9)}F
                </div>
                <div class="weather">
                  <h3>Main Weather:</h3> ${result.weather[0].main}
                </div>
                <div class="weather">
                  <h3>Description:</h3> ${result.weather[0].description}
                </div>
                `)
            });
    })
