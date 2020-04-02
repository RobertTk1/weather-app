import React, { useState } from "react";

function WeatherDisplay({ weather, search }) {
  const { temp, city, country, description, tempMax, tempMin } = weather;

  const [query, setQuery] = useState("");

  const converter = celcius => {
    return Math.round(celcius * 1.8 + 32);
  };

  const press = e => {
    if (e.key === "Enter") {
      search(query);
      setQuery("");
    }
  };

  return (
    <div>
      <div className="search-box">
        <input
          type="text"
          className="search-bar"
          placeholder="City name ..."
          value={query}
          onChange={e => {
            setQuery(e.target.value);
          }}
          onKeyPress={e => {
            press(e);
          }}
        />
      </div>
      {city !== undefined ? (
        <div className="info">
          <div className="location">
            {city}, {country}
          </div>
          <div className="weather-box">
            <div className="tempMax">
              <p>
                High: <span>{converter(Math.round(tempMax))}&deg;</span>F
              </p>
            </div>
            <div className="temp">{converter(Math.round(temp))}&deg;</div>
            <div className="tempMin">
              <p>
                Low: <span>{converter(Math.round(tempMin))}&deg;</span>F
              </p>
            </div>
            <div className="weather">{description}</div>
          </div>
        </div>
      ) : (
        <div className="welcome">
          <h2 className="msg">WELCOME</h2>
          <h3 className="msg">TO</h3>
          <h1>Weather.io</h1>
          <div className="creator">
            <h3>Made By</h3>
            <h2> Robert E.</h2>
            <p>Using: HTML, CSS, JSX, REACT </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default WeatherDisplay;
