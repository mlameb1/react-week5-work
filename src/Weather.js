import React, {useState} from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./weather.css";

export default function Weather() {
let [weatherData, setWeatherData]=useState({ready: false});

function handleResponse(response) {
console.log(response.data)
setWeatherData({
 ready: true,
 temperature: response.data.main.temp,
 humidity: response.data.main.humidity,
 date: new Date(response.data.dt*1000),
 description: response.data.weather[0].description,
 iconUrl: 'https://ssl.sstatic.com/onebox/weather/64/partly_cloudy.png',
 wind: response.data.wind.speed,
 city: response.data.name   
});
}
if(weatherData.ready){

    return (<div className="weather">
         <form>
            <WeatherInfo data={weatherData}/>
            
       <div className="row">
        <div className="col-9">
            <input type="search" 
            placeholder="Enter a city.." 
            className="form-control"
            autofocus="on"
            />
            </div>  
            <div className="col-3">
                <input type="submit"
                value="search"
                className="btn btn-primary w-100"/>
                </div>  
                </div> 
            </form>
        
    </div>
    );
} else{
let apiKey = "9cb72bec958f8fb02391985ed7b219d2";
let city = "New York";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleResponse);
return "Loading...";
}
}