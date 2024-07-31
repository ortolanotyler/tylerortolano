import React, { useState } from 'react';
import axios from 'axios';
import { WbSunny } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import styles from './WeatherWidget.module.css';

const WeatherForecast = () => {
  const [place, setPlace] = useState('');
  const [temperature, setTemperature] = useState(null);
  const [condition, setCondition] = useState('');

  const handleSearch = async () => {
    try {
      // Get latitude and longitude
      const geocodeResponse = await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${place}&key=2bbf01aacb3c4a07be9312509cbe14ab`);
      const { lat, lng } = geocodeResponse.data.results[0].geometry;

      // Get tomorrow's weather
      const weatherResponse = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&daily=temperature_2m_max,weathercode&timezone=auto`);
      const tomorrowTempCelsius = weatherResponse.data.daily.temperature_2m_max[1]; // Get tomorrow's max temperature in Celsius
      const tomorrowConditionCode = weatherResponse.data.daily.weathercode[1]; // Get tomorrow's weather condition code

      const weatherConditions = {
        0: 'Clear sky',
        1: 'Mainly clear',
        2: 'Partly cloudy',
        3: 'Overcast',
        45: 'Fog',
        48: 'Depositing rime fog',
        51: 'Drizzle: Light',
        53: 'Drizzle: Moderate',
        55: 'Drizzle: Dense intensity',
        56: 'Freezing Drizzle: Light',
        57: 'Freezing Drizzle: Dense intensity',
        61: 'Rain: Slight',
        63: 'Rain: Moderate',
        65: 'Rain: Heavy intensity',
        66: 'Freezing Rain: Light',
        67: 'Freezing Rain: Heavy intensity',
        71: 'Snow fall: Slight',
        73: 'Snow fall: Moderate',
        75: 'Snow fall: Heavy intensity',
        77: 'Snow grains',
        80: 'Rain showers: Slight',
        81: 'Rain showers: Moderate',
        82: 'Rain showers: Violent',
        85: 'Snow showers slight',
        86: 'Snow showers heavy',
        95: 'Thunderstorm: Slight or moderate',
        96: 'Thunderstorm with slight hail',
        99: 'Thunderstorm with heavy hail',
      };

      const tomorrowCondition = weatherConditions[tomorrowConditionCode] || 'Unknown condition';

      const tomorrowTempFahrenheit = (tomorrowTempCelsius * 9/5) + 32; // Convert to Fahrenheit

      setTemperature({
        celsius: tomorrowTempCelsius,
        fahrenheit: tomorrowTempFahrenheit,
      });
      setCondition(tomorrowCondition);
    } catch (err) {
      setTemperature(null);
      setCondition('Error fetching data.');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <input
          type="text"
          value={place}
          onChange={(e) => setPlace(e.target.value)}
          placeholder="Enter a place"
          className={styles.input}
        />
        <IconButton onClick={handleSearch} className={styles.iconButton}>
          <WbSunny className={styles.icon} />
        </IconButton>
      </div>
      {temperature !== null && (
        <div className={styles.result}>
          <h3>Tomorrow's Max Temperature: {temperature.celsius}°C / {temperature.fahrenheit}°F</h3>
          <h4>Condition: {condition}</h4>
        </div>
      )}
    </div>
  );
};

export default WeatherForecast;
