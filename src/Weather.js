import React, {useState} from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./weather.css";

export default function Weather(props) {
let [weatherData, setWeatherData]=useState({ready: false});
let [city, setCity] = useState(props.defaultCity);

function handleResponse(response) {
    console.log(response.data)
setWeatherData({
 ready: true,
 temperature: response.data.main.temp,
 humidity: response.data.main.humidity,
 date: new Date(response.data.dt*1000),
 description: response.data.weather[0].description,
 iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
 wind: response.data.wind.speed,
 city: response.data.name   
});
}

function search(){
    let apiKey = "9cb72bec958f8fb02391985ed7b219d2";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
}

function handleSubmit(event){
    event.preventDefault();
    search();
}

function handleCityChange(event){
    setCity(event.target.value);

}

if(weatherData.ready){

    return (<div className="weather">
         <form onSubmit = {handleSubmit}>  
       <div className="row">
        <div className="col-9">
            <input type="search" 
            placeholder="Enter a city.." 
            className="form-control"
            autofocus="on"
            onChange = {handleCityChange}
            />
            </div>  
            <div className="col-3">
                <input type="submit"
                value="search"
                className="btn btn-primary w-100"/>
                </div>  
                </div> 
            </form>
            <WeatherInfo data={weatherData}/>
    </div>
    );
} else{
    search();

return "Loading...";
}
}