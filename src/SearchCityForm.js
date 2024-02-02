import React, { useState } from "react";
import axios from "axios";
import "./CityWeather.css";
import Weather from "./WeatherToday";

export default function SearchCityForm(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [ready, setReady] = useState(false);
  const [weatherinfo, setWeatherinfo] = useState({});
  const [unit, setUnit] = useState("celcius")

  function handleResponse(response) {
    setReady(true);
    setWeatherinfo({
      city: response.data.city,
      coordinates: response.data.coordinates,
      description: response.data.condition.description,
      icon_url: response.data.condition.icon_url,
      icon: response.data.condition.icon,
      time: response.data.time,
      temp: Math.round(response.data.temperature.current),
      humidity: response.data.temperature.humidity,
      wind: Math.round(response.data.wind.speed),
    });
    console.log(response.data);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function search() {
    const apiKey = "f0t6f37fo7eacab2cf93452fbe48b35c";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (ready) {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="search"
              placeholder="Enter a city..."
              className="search form-control"
              onChange={handleCityChange}
            />

            <button
              type="submit"
              className="btn btn-primary text-dark fw-normal rounded-3 ms-2 px-4"
            >
              Search
            </button>
          </div>
        </form>

        <Weather data={weatherinfo} unit = {unit} setUnit ={setUnit}/>
      </div>
    );
  } else {
    search();
  }
}
