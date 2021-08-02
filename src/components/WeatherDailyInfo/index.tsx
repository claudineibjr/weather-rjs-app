import React from 'react';
import { WeatherInfo } from '../../data/model/WeatherInfo/WeatherInfo';
import { DateUtilities } from '../../utils/utils';
import './styles.scss';

type WeatherDailyInfoProps = {
  weatherDailyInfo: WeatherInfo
}

export const WeatherDailyInfo = ({ weatherDailyInfo }: WeatherDailyInfoProps) => (
    <a href="#" style={{ textDecoration: 'none' }}>
      <div className="WeatherDailyInfoMain">
          <div className="DayName">
            {DateUtilities.shortDays[weatherDailyInfo.date.getDay()]}
          </div>
        
        <img className="WeatherIcon"
          src={weatherDailyInfo.wheaterInfoIcon} />

        <div className="Temperatures">
          <div className="MaxTemperature">
            {weatherDailyInfo.maxTemperature | 0}º
          </div>
          <div className="MinTemperature">
            {weatherDailyInfo.minTemperature | 0}º
          </div>
        </div >
      </div>
    </a>
);