import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudSun } from '@fortawesome/free-solid-svg-icons';
import styles from './WeatherWidget.module.css';

const WeatherForecast = () => {
  const [temperature, setTemperature] = useState(null);
  const [condition, setCondition] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(handleLocationSuccess, handleLocationError);
    } else {
      setError('Geolocation is not supported by this browser.');
    }
  }, []);

  const handleLocationSuccess = async (position) => {
    const { latitude, longitude } = position.coords;
    await fetchWeather(latitude, longitude);
  };

  const handleLocationError = () => {
    setError('Unable to retrieve your location.');
  };

  const fetchWeather = async (latitude, longitude) => {
    try {
      // Get tomorrow's weather
      const weatherResponse = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,weathercode&timezone=auto`);
      const tomorrowTemp = weatherResponse.data.daily.temperature_2m_max[1]; // Get tomorrow's max temperature
      const tomorrowConditionCode = weatherResponse.data.daily.weathercode[1]; // Get tomorrow's weather condition

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

      setTemperature(tomorrowTemp);
      setCondition(tomorrowCondition);
    } catch (err) {
      setTemperature(null);
      setCondition('');
      setError('Error fetching weather data.');
    }
  };

  return (
    <div className={styles.container}>
      <button onClick={() => { navigator.geolocation.getCurrentPosition(handleLocationSuccess, handleLocationError); }} className={styles['icon-button']}>
        <FontAwesomeIcon icon={faCloudSun} className={styles.icon} />
      </button>
      {temperature !== null && (
        <div className={styles.result}>
          <h3>Tomorrow's Max Temperature: {temperature}°C</h3>
          <h4>Condition: {condition}</h4>
        </div>
      )}
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default WeatherForecast;
