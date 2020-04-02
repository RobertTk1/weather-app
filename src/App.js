import React from "react";
import WeatherDisplay from "./components/WeatherDisplay";
import "./App.css";

const api = {
  key: "d5ad9a5783276aead22b39c468878e91",
  base: "https://api.openweathermap.org/data/2.5/"
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      city: undefined,
      country: undefined,
      description: undefined,
      temp: undefined,
      tempMax: undefined,
      tempMin: undefined
    };
  }

  search = query => {
    fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          city: data.name,
          description: data.weather[0].description,
          temp: data.main.temp,
          country: data.sys.country,
          tempMax: data.main.temp_max,
          tempMin: data.main.temp_min
        })
      )
      .catch(() => alert("Please enter a valid city"));
  };

  render() {
    return (
      <div
        className={
          this.state.city !== undefined
            ? this.state.temp > 15
              ? "body1 hot"
              : "body1"
            : "body1"
        }
      >
        <div
          className={
            this.state.city !== undefined
              ? this.state.temp > 15
                ? "app warm"
                : "app"
              : "app"
          }
        >
          <main>
            <WeatherDisplay weather={this.state} search={this.search} />
          </main>
        </div>
      </div>
    );
  }
}

export default App;
