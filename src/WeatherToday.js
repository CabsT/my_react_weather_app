import React from "react";
import FormattedDate from "./FormattedDate";
import "./CityWeather.css"

export default function Weather(props) {
  return (
    <div className="row weatherOfToday">
      <div className="col-sm-12 heading">{props.data.city}</div>
      <FormattedDate time={props.data.time * 1000} />
      <div className="col-sm-12 description text-capitalize"> {props.data.description}</div>
      <div className="row">
        <div className="col-3 col-sm-2">
          <img src={props.data.icon_url} className="icon" alt={props.data.description}/>
        </div>
        <div className=" col-3 col-sm-2">
          <span className="temperature">{props.data.temp}</span>
          <span className="unit">°C</span>
        </div>
        <div className="col-5 col-sm-8 conditions">
          <ul className="weatherinfo">
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
