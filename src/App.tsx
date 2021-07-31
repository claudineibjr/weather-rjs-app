import * as React from 'react';
import logo from './logo.svg';
import './App.css';

import { loadWeekWeatherInfo } from './services/OpenWeatherMapApi';
import { WeatherInfoMap } from './data/model/WeatherInfo/response/WeatherInfoMap';

const App: React.FC = () => {
  const weekWeatherInfo = loadWeekWeatherInfo();
  console.log('weekWeatherInfo');
  console.log(weekWeatherInfo?.lat);
  console.log(weekWeatherInfo?.lon);
  console.log(weekWeatherInfo?.timezone);
  console.log(weekWeatherInfo?.timezone_offset);
  console.log('weekWeatherInfo?.daily');
  console.log(WeatherInfoMap.toWeatherInfo(weekWeatherInfo?.daily[0]));

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
