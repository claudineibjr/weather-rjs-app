import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HomePage } from './pages/HomePage';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { DateUtilities } from './utils/utils';
import HourlyWeatherInfoPage from './pages/HourlyWeatherInfo';

ReactDOM.render(
  <React.StrictMode>
    <Router>
        <Switch>
          <Route path={
            [
              ...["/today", "/tomorrow", "/yesterday"],
              ...DateUtilities.days.map((day, _, __) => `/${day}`)
            ]}
            component={HourlyWeatherInfoPage}
            />
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
    </Router>    
  </React.StrictMode>,
  document.getElementById('root'),
);
