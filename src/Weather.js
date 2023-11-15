import React, {useState} from "react";
import axios from "axios";
import "./weather.css";

export default function Weather() {
cons [weatherData, setWeatherData]=useState({ready: false});

function handleResponse(response) {
console.log(response.data)
setWeatherData({
 ready: true,
 temperature: response.data.main,temp,
 humidity: response.data.main.humidity,
 date: "Wednesday 07:00",
 description: response.data.weather[0].description,
 iconUrl: 'https://ssl.sstatic.com/onebox/weather/64/partly_cloudy.png',
 wind: response.data.wind.speed,
 city: response.data.name   
});
}
if(weatherData.ready){

    return (<div className="weather">
         <form>
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
        <h1>{weatherData.city}</h1>
        <ul>
            <li>{weatherData.date}</li>
            <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row mt-3">
            <div className="col-6">
                <div className="clearfix">
                    <img src={weatherData.iconUrl}
                    alt={weather.description}
                    className="float-left"></img>
                    
                    <div className="float-left">
                        <span className="temperature">{Math.round(weatherData.temperature)}</span>
                        <span className="unit">°C</span>
                    </div>
                </div>
                </div>
            
        <div className="col-6">
            <ul>
            
                <li>Humidity: {weatherData.humidity}%</li>
                <li>Wind: {weatherData.wind}km/h</li>
            </ul>
       </div>
       </div>
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