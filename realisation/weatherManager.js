class weatherManager{
    #_currentForecast;
    #_weekForecast;

    fetchForecast(url){
        fetch(url)
        .then(Response =>{
            return Response.json()
        })
        .then(json =>{
            var weather = new weather()
            weather.city = json.name
            weather.description = json.weather[0].main
            weather.iconCode= json.weather[0].icon
            weather.temp=json.main.temp
            weather.humidity=json.main.humidity
            this.#_currentForecast=weather
            console.log(this.#_currentForecast)
        })
        .catch(error =>{
            console.log(error)
        });
    }
}