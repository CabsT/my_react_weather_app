import React from "react";
import FormattedDate from "./FormattedDate";
import "./CityWeather.css";
import Weathericon from "./Weathericon";
import Temperature from "./Temperature";

export default function Weather(props) {
  return (
    <div>
      <div className="row">
        <div className="col-sm-12 heading">{props.data.city}</div>
        <FormattedDate time={props.data.time * 1000} />
        <div className="col-sm-12 description text-capitalize">
          {" "}
          {props.data.description}
        </div>
        <div className="row row-cols-auto">
          <div className="col p-0">
            <Weathericon icon={props.data.icon}/>
          </div>
          <Temperature celcius = {props.data.temp}/>
          <div className="col ms-2">
            <ul className="weatherinfo">
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {props.data.wind}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
