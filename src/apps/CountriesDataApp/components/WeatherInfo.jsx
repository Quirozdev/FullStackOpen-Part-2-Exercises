import { useEffect, useState } from 'react';
import axios from 'axios';

const WeatherInfo = ({ countryCapital }) => {
  const [weatherInfo, setWeatherInfo] = useState(null);
  useEffect(() => {
    axios
      .get(
        `https://api.weatherapi.com/v1/current.json?key=${
          import.meta.env.VITE_WEATHER_API_KEY
        }&q=${countryCapital}&aqi=no`
      )
      .then((response) => {
        const data = response.data;
        setWeatherInfo({
          capitalName: data.location.name,
          temperature: data.current.temp_c,
          windVelocity: data.current.wind_mph,
          iconSrc: data.current.condition.icon,
          iconAlt: data.current.condition.text,
        });
      });
  });

  if (!weatherInfo) {
    return null;
  }

  return (
    <div>
      <h2>Weather in {weatherInfo.capitalName}</h2>
      <p>temperature {weatherInfo.temperature} Celcius</p>
      <img src={weatherInfo.iconSrc} alt={weatherInfo.iconAlt} />
      <p>wind {weatherInfo.windVelocity} mph</p>
    </div>
  );
};

export default WeatherInfo;
