import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "San Francisco",
    date: "Friday 10:18am",
    description: "Cloudy",
    imageUrl: "https://ssl.gstatic.com/onebox/weather/64/cloudy.png",
    humidity: "91%",
    wind: "10 km/h",
  };
  return (
    <div className="weather-app-wrapper">
      <div className="Weather">
        <form className="mb-4">
          <div className="row justify-content-end">
            <div className="col-5">
              <input
                type="search"
                placeholder="see another city"
                className="form-control"
                autoComplete="off"
              />
            </div>
          </div>
          <div className="col-4">Right now in...</div>
        </form>
        <div className="overview">
          <h1>{weatherData.city}</h1>
          <ul>
            <li>
              Last updated: {weatherData.date}
              <span id="date"></span>
            </li>
            <li className="description">{weatherData.description}</li>
          </ul>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="clearfix weather-temperature">
              <img src={weatherData.imageUrl} alt={weatherData.description} />
              <span>
                <strong>14 </strong>
                <small>
                  <a href="/" className="active">
                    °C
                  </a>{" "}
                  |
                  <a href="/" className="active">
                    °F
                  </a>
                </small>
              </span>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li className="moreInfo">Humidity: {weatherData.humidity}</li>
              <li className="moreInfo">Wind: {weatherData.wind}</li>
            </ul>
          </div>
        </div>
        <div className="weather-forecast">
          <div className="row">
            <div className="col-2">
              <div className="weather-forecast-date">Thur</div>
              <img
                src="http://openweathermap.org/img/wn/02d@2x.png"
                alt=""
                width="36px"
              />
              <br />
              <div className="weather-forecast-temperatures">
                <span className="weather-forecast-high">18° | </span>
                <span className="weather-forecast-low">12°</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <small>
        <a
          href="https://github.com/stephanie-garcia/weather-react"
          className="git-link"
        >
          {" "}
          Open-sourced code,{" "}
        </a>
        by Steph Garcia
      </small>
    </div>
  );
}
