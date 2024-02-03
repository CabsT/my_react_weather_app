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
          °C |{" "}
          <a
            className={props.unit === "celcius"? "active-link" : "inactive-link"}
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
          <a
            className={props.unit === "celcius" ? "inactive-link" : "active-link"}
            href="/"
            onClick={showCelcius}
          >
            °C
          </a>{" "}
          |{" "}
          <a
            href="/"
            className={props.unit === "celcius" ? "active-link" : "inactive-link"}
          >
            {" "}
            °F
          </a>
        </span>
      </div>
    );
  }
}
