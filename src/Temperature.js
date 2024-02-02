import React, { useState } from "react";

export default function Temperature(props) {
  const [unit, setUnit] = useState("celcius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelcius(event) {
    event.preventDefault();
  setUnit("celcius")
  }
  function fahrenheit() {
    return Math.round((props.celcius * 9) / 5 + 32);
  }

  if (unit === "celcius") {
    return (
      <div className=" col temp">
        <span className="temperature">{props.celcius}</span>
        <span className="unit">
          °C |{" "}
          <a
            className={unit === "celcius"? "active-link" : "inactive-link"}
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
            className={unit === "celcius" ? "inactive-link" : "active-link"}
            href="/"
            onClick={showCelcius}
          >
            °C
          </a>{" "}
          |{" "}
          <a
            href="/"
            className={unit === props.unit ? "active-link" : "inactive-link"}
          >
            {" "}
            °F
          </a>
        </span>
      </div>
    );
  }
}
