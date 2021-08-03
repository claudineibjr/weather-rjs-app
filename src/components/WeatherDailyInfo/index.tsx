import React from 'react';
import { Link } from 'react-router-dom';
import { DailyWeatherInfo } from '../../data/model/WeatherInfo/DailyWeatherInfo';
import { DateUtilities } from '../../utils/utils';
import './styles.scss';

type WeatherDailyInfoProps = {
  weatherDailyInfo: DailyWeatherInfo
}

export const WeatherDailyInfo = ({ weatherDailyInfo }: WeatherDailyInfoProps) => (
    <Link to={`/${DateUtilities.days[weatherDailyInfo.date.getDay()]}`} className="DefaultAnchor">
      <div className="WeatherDailyInfoMain">
          <div className="DayName">
            {DateUtilities.shortDays[weatherDailyInfo.date.getDay()]}
          </div>
        
        <img className="WeatherIcon"
          alt="WeatherIcon"
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
    </Link>
);