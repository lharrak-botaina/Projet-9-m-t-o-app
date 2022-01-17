var city;

var key='1253309e30b4fb953c136c1426565be0&units=metric'
var weatherManager = new weatherManager()

function onSearch(){
    city = document.getElementById("cityInput").value
    var url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
    weatherManager.fetchForecast(url)
    document.getElementById("cityInpu").value=""
}
