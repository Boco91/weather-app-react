import React from "react";

const Weather = props => {
  const { city, country, temperature, humidity, description, error } = props;
  return (
    <div className="weather-info">
      <div>
        {city && country && (
          <p className="weather_key">
            Location:{" "}
            <span className="weather_value">
              {city}, {country}
            </span>
          </p>
        )}
        {temperature && (
          <p className="weather_key">
            Temperature: <span className="weather_value">{temperature}</span>
          </p>
        )}
        {humidity && (
          <p className="weather_key">
            {" "}
            Humidity: <span className="weather_value">{humidity}</span>
          </p>
        )}
        {description && (
          <p className="weather_key">
            Conditions: <span className="weather_value">{humidity}</span>
          </p>
        )}
        {error && <p className="weather_error">{error}</p>}
      </div>
    </div>
  );
};

export default Weather;
