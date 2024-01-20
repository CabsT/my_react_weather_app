import React from "react";
import "./City.css";

export default function CitySearchForm(props) {
  return (
    <div>
      <form>
        <div className="row">
          <div className="col-10">
            <input type="search" placeholder="Enter a city..." className="search w-100"/>
          </div>
          <div className="col-2">
            <button type="button" class="btn btn-primary  rounded-3 w-100">
              Search
            </button>
          </div>
        </div>
      </form>

      <div className="row">{props.defaultCity}</div>
    </div>
  );
}
