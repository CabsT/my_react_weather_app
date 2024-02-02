import React from "react";
import FormattedDate from "./FormattedDate";
import "./CityWeather.css";
import Weathericon from "./Weathericon";
import Temperature from "./Temperature";
import WeatherForecast from "./WeatherForecast";

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
        <div
          className="row row-cols-auto flex-nowrap"
          style={{ minWidth: "100%", overflow: "auto" }}
        >
          <div className="col p-0">
            <Weathericon icon={props.data.icon} width={100} height={100} />
          </div>
          <Temperature
            setUnit={props.setUnit}
            unit={props.unit}
            celcius={props.data.temp}
          />
          <div className="col ms-2">
            <ul className="weatherinfo">
              <li>
                Humidity:{" "}
                <span className="fw-bold">{props.data.humidity}%</span>
              </li>
              <li>
                Wind: <span className="fw-bold">{props.data.wind}km/h</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <WeatherForecast
        coordinates={props.data.coordinates}
        unit={props.unit}
      />
    </div>
  );
}
