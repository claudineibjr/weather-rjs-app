import React from 'react';
import { WeatherInfo } from '../../data/model/WeatherInfo/WeatherInfo';
import { DateUtilities } from '../../utils/utils';

type WeatherDailyInfoProps = {
  weatherDailyInfo: WeatherInfo
}

export const WeatherDailyInfo = ({ weatherDailyInfo }: WeatherDailyInfoProps) => (
    <div>
      {DateUtilities.shortDays[weatherDailyInfo.date.getDay()]} <br/>
      
      <img src={weatherDailyInfo.wheaterInfoIcon} />

      <div>
        {weatherDailyInfo.maxTemperature | 0}º
        {weatherDailyInfo.minTemperature | 0}º
      </div>
    </div>
);