import React from "react";
import Weathericon from "./Weathericon";


export default function WeatherForecastDay(props) {
  let max = Math.round(props.data.temperature.maximum);
  let min = Math.round(props.data.temperature.minimum);
  let now = new Date(props.data.time * 1000);
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let day = days[now.getDay()];
    
  return (
    <div>
      <div>{day}</div>
      <div>
        <Weathericon icon={props.data.condition.icon} width={60} height={60} />
      </div>
      <div>
        <span>{max}°</span> <span className="opacity-75 ms-1">{min}°</span>
      </div>
    </div>
  );
 ;}

  