import React, { useState } from 'react';
import axios from 'axios';
import { WbSunny, Cloud, AcUnit, Grain, Thunderstorm, LocationOn } from '@mui/icons-material';
import styles from './WeatherWidget.module.css';

const WeatherForecast = () => {
  const [temperature, setTemperature] = useState(null);
  const [condition, setCondition] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // New state to track loading status
  const [locationRequested, setLocationRequested] = useState(false);

  const handleLocationRequest = () => {
    if (navigator.geolocation) {
      setLoading(true); // Start loading
      navigator.geolocation.getCurrentPosition(handleLocationSuccess, handleLocationError);
      setLocationRequested(true);
    } else {
      setError('Geolocation is not supported by this browser.');
    }
  };

  const handleLocationSuccess = async (position) => {
    const { latitude, longitude } = position.coords;
    await fetchWeather(latitude, longitude);
  };

  const handleLocationError = () => {
    setLoading(false); // Stop loading on error
    setError('Unable to retrieve your location.');
  };

  const fetchWeather = async (latitude, longitude) => {
    try {
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
      setLoading(false); // Stop loading when data is fetched
    } catch (err) {
      setLoading(false); // Stop loading on error
      setTemperature(null);
      setCondition('');
      setError('Error fetching weather data.');
    }
  };

  const renderWeatherIcon = (condition) => {
    switch (condition) {
      case 'Clear sky':
      case 'Mainly clear':
        return <WbSunny className={styles.icon} />;
      case 'Partly cloudy':
      case 'Overcast':
        return <Cloud className={styles.icon} />;
      case 'Fog':
      case 'Depositing rime fog':
        return <AcUnit className={styles.icon} />; // Using AcUnit for fog/mist conditions
      case 'Rain':
      case 'Drizzle: Light':
      case 'Drizzle: Moderate':
      case 'Drizzle: Dense intensity':
      case 'Rain: Slight':
      case 'Rain: Moderate':
      case 'Rain: Heavy intensity':
        return <Grain className={styles.icon} />;
      case 'Snow fall: Slight':
      case 'Snow fall: Moderate':
      case 'Snow fall: Heavy intensity':
      case 'Snow grains':
      case 'Snow showers slight':
      case 'Snow showers heavy':
        return <AcUnit className={styles.icon} />;
      case 'Thunderstorm: Slight or moderate':
      case 'Thunderstorm with slight hail':
      case 'Thunderstorm with heavy hail':
        return <Thunderstorm className={styles.icon} />;
      default:
        return <LocationOn className={`${styles.icon} ${loading ? styles.blink : ''}`} />; // Default location icon with blinking effect
    }
  };

  return (
    <div className={styles.container}>
      <button onClick={handleLocationRequest} className={styles['icon-button']}>
        {renderWeatherIcon(locationRequested ? condition : null)}
      </button>
      {temperature !== null && (
        <div className={styles.result}>
          <h3>{temperature}°C</h3>
          <h4>{condition}</h4>
        </div>
      )}
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default WeatherForecast;
