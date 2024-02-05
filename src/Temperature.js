import React from "react";

export default function Temperature(props) {
 

  function showFahrenheit(event) {
    event.preventDefault();
    props.setUnit("fahrenheit");
  }

  function showCelcius(event) {
    event.preventDefault();
  props.setUnit("celcius")
  }
  function fahrenheit() {
    return Math.round((props.celcius * 9) / 5 + 32);
  }

  if (props.unit === "celcius") {
    return (
      <div className=" col temp">
        <span className="temperature">{props.celcius}</span>
        <span className="unit">
          <a href="/"
            className={
              props.unit === "celcius" ? "inactive-link" : "active-link"
            }
          >
            °C{" "}
          </a>
          |
          <a
            className="ms-1"
            href="/"
            onClick={showFahrenheit}
          >
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className=" col">
        <span className="temperature">{fahrenheit()}</span>
        <span className="unit ms-1">
          °F <span>|</span>
          <a
            className={props.unit === "celcius" ? "active-link" : "active-link"}
            href="/"
            onClick={showCelcius}
          >
            {""} °C
          </a>
        </span>
      </div>
    );
  }
}
