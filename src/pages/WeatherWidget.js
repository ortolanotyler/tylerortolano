import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudSun } from '@fortawesome/free-solid-svg-icons';
import styles from './WeatherWidget.module.css';

const WeatherForecast = () => {
  const [place, setPlace] = useState('');
  const [temperature, setTemperature] = useState(null);
  const [condition, setCondition] = useState('');

  const handleSearch = async () => {
    try {
      // Get latitude and longitude
      const geocodeResponse = await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${place}&key=d01de6a480604a23a3a8e6e2e807ca99`);
      const { lat, lng } = geocodeResponse.data.results[0].geometry;

      // Get tomorrow's weather
      const weatherResponse = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&daily=temperature_2m_max,weathercode&timezone=auto`);
      const tomorrowTemp = weatherResponse.data.daily.temperature_2m_max[1]; // Get tomorrow's max temperature
      const tomorrowCondition = weatherResponse.data.daily.weathercode[1]; // Get tomorrow's weather condition

      setTemperature(tomorrowTemp);
      setCondition(tomorrowCondition);
    } catch (err) {
      setTemperature(null);
      setCondition('');
    }
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        value={place}
        onChange={(e) => setPlace(e.target.value)}
        placeholder="Enter a place"
        className={styles.input}
      />
      <button onClick={handleSearch} className={styles['icon-button']}>
        <FontAwesomeIcon icon={faCloudSun} className={styles.icon} />
      </button>
      {temperature !== null && (
        <div className={styles.result}>
          <h3>Tomorrow's Max Temperature: {temperature}°C</h3>
          <h4>Condition: {condition}</h4>
        </div>
      )}
    </div>
  );
};

export default WeatherForecast;
