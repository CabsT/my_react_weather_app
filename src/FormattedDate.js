import React from "react";
import "./CityWeather.css";

export default function FormattedDate(props) {
  let now = new Date(props.time);
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = daysOfWeek[now.getDay()];
  console.log(day)
  let hour = now.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }

  let min = now.getMinutes();
  if (min < 10) {
    min = `0${min}`;
  }
  return (
    <div className="col-sd-12 time">
      Last updated: {day}{" "}{hour}:{min}
    </div>
  );
}
