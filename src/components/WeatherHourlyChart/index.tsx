import React, { useMemo } from 'react';
import { HourlyWeatherInfo } from '../../data/model/WeatherInfo/HourlyWeatherInfo';

import { scaleTime, scaleLinear } from '@vx/scale';
import { Group } from '@vx/group';
import { AreaClosed } from '@vx/shape';
import { LinearGradient } from '@vx/gradient';
import { extent, max, min } from 'd3-array';

type WeatherHourlyInfoProps = {
  weatherDailyInfo: Array<HourlyWeatherInfo>
}

export const WeatherHourlyChart = ({ weatherDailyInfo }: WeatherHourlyInfoProps) => {
  // Dimensions
  const width = 800;
  const height = 450;

  // Accessors
  const getDate = (d: HourlyWeatherInfo): Date => d.date;
  const getTemperatureValue = (d: HourlyWeatherInfo): number => d.temperature;

  // Scales
  const xDateValues = useMemo(
    () =>
      scaleTime({
        range: [0, width],
        domain: extent(weatherDailyInfo, getDate) as [Date, Date],
      }),
    [width, 0],
  );

  const yTemperatureValues = useMemo(
    () =>
      scaleLinear({
        range: [height, 0],
        domain: [(min(weatherDailyInfo, getTemperatureValue) || 0), (max(weatherDailyInfo, getTemperatureValue) || 0)],
        nice: true,
      }),
    [0, height],
  );
  
  return (
    <div>
      <svg width={width} height={height}>
        <Group top={0} left={0}>
          <LinearGradient
            from='#ff0000'
            to='#0000ff'
            id='gradient'
            vertical
          />
          <AreaClosed<HourlyWeatherInfo>
            data={weatherDailyInfo}
            x={d => xDateValues(getDate(d)) ?? 0}
            y={d => yTemperatureValues(getTemperatureValue(d)) ?? 0}
            yScale={yTemperatureValues}
            strokeWidth={2}
            stroke="url(#gradient)"
            fill="url(#gradient)"
          />
        </Group>
      </svg>
    </div>
  );
}