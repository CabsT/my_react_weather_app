import React from "react";
import Weathericon from "./Weathericon";


export default function WeatherForecastDay(props) {

  let max =
    props.unit === "celcius"
      ? Math.round(props.data.temperature.maximum)
      : Math.round((props.data.temperature.maximum * 9) / 5 + 32); 
  let min =
    props.unit === "celcius"
      ? Math.round(props.data.temperature.minimum)
      : Math.round((props.data.temperature.minimum * 9) / 5 + 32);
  let now = new Date(props.data.time * 1000);
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let day = days[now.getDay()];
    
  return (
    <div>
      <div>
        <span className="fw-bold">{day}</span>
      </div>
      <div>
        <Weathericon icon={props.data.condition.icon} width={60} height={60} />
      </div>
      <div>
        <span className="fw-bold">{max}°</span>{" "}
        <span className="opacity-75 ms-1">{min}°</span>
      </div>
    </div>
  );
 ;}

  