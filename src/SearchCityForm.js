import React, { useState } from "react";
import axios from "axios";
import "./CityWeather.css";
import Weather from "./WeatherToday";

export default function SearchCityForm(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [ready, setReady] = useState(false);
  const [weatherinfo, setWeatherinfo] = useState({});

  function handleResponse(response) {
    setReady(true);
    setWeatherinfo({
      city: response.data.city,
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
          <div className="row clearfix">
            <div className="col-6 col-sm-8 col-md-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="search w-100 float-start"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-6 col-sm-3 col-md-3">
              <button
                type="submit"
                className="btn btn-primary text-dark fw-normal rounded-3 px-4 float-start"
              >
                Search
              </button>
            </div>
          </div>
        </form>
        <Weather data={weatherinfo} />
      </div>
    );
  } else {
    search();
  }
}
