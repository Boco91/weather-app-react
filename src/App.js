import React, { Component } from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "8f7c1e7b9d8a37c393d73301e7717390";

class App extends Component {
  state = {
    temperature: "",
    city: "",
    humidity: "",
    description: "",
    wind: "",
    error: ""
  };

  //Get data from api
  getWeather = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`
    );
    const data = await api_call.json();

    //if values are entered
    if (city && country) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    } else {
      this.setState({
        temperature: "",
        city: "",
        country: "",
        humidity: "",
        description: "",
        error: "Please enter city and country name"
      });
    }
  };

  render() {
    return (
      <div>
        <Titles />
        <Form getWeather={this.getWeather} />
        <Weather
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}
        />
      </div>
    );
  }
}
export default App;
