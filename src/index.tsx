import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HomePage } from './pages/HomePage';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import HourlyWeatherInfoPage from './pages/HourlyWeatherInfo';
import { DateUtilities } from './utils/utils';

ReactDOM.render(
  <React.StrictMode>
    <Router>
        <Switch>
          <Route path={
            [
              ...["/today", "/tomorrow", "/yesterday"],
              ...DateUtilities.days.map((day, _, __) => `/${day}`)
            ]} >
            <HourlyWeatherInfoPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
    </Router>    
  </React.StrictMode>,
  document.getElementById('root'),
);
