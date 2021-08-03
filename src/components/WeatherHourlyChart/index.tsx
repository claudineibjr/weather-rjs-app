import React, { useMemo } from 'react';
import { HourlyWeatherInfo } from '../../data/model/WeatherInfo/HourlyWeatherInfo';

import { scaleTime, scaleLinear } from '@vx/scale';
import { AxisLeft, AxisBottom } from '@vx/axis';
import { Group } from '@vx/group';
import { AreaClosed } from '@vx/shape';
import { LinearGradient } from '@vx/gradient';
import { extent, max, min } from 'd3-array';

type WeatherHourlyInfoProps = {
  weatherDailyInfo: Array<HourlyWeatherInfo>
}

export const WeatherHourlyChart = ({ weatherDailyInfo }: WeatherHourlyInfoProps) => {
  // Dimensions
  const margin = {
    top: 30,
    left: 60,
    right: 40,
    bottom: 80,
  };

  const width = 640 + margin.left + margin.right;
  const height = 360 + margin.top + margin.bottom;

  // Bounds
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  // Accessors
  const getDate = (d: HourlyWeatherInfo): Date => d.date;
  const getTemperatureValue = (d: HourlyWeatherInfo): number => d.temperature;

  // Scales
  const xDateValues = useMemo(
    () =>
      scaleTime({
        range: [margin.left, innerWidth + margin.left],
        domain: extent(weatherDailyInfo, getDate) as [Date, Date],
      }),
    [innerWidth, margin.left],
  );

  const yMin = (min(weatherDailyInfo, getTemperatureValue) || 0);
  const yMax = (max(weatherDailyInfo, getTemperatureValue) || 0);
  const yTemperatureValues = useMemo(
    () =>
      scaleLinear({
        range: [innerHeight + margin.top, margin.top],
        domain: [yMin, yMax],
        nice: true,
      }),
    [margin.top, innerHeight],
  );

  return (
    <div className="WeatherHourlyChartMain">
      <svg width={width} height={height}>
        <rect
          x={margin.left}
          y={margin.top}
          width={innerWidth}
          height={innerHeight}
          fill="url(#area-background-gradient)"
          rx={14}
        />
        <LinearGradient id="area-background-gradient" from="#f3f3f3" to="#e2e2e2" vertical />
        <LinearGradient
          from='#ff0000'
          to='#0000ff'
          id='gradient'
          vertical
        />
        <Group top={0} left={0}>
          <AreaClosed<HourlyWeatherInfo>
            data={weatherDailyInfo}
            x={d => xDateValues(getDate(d)) ?? 0}
            y={d => yTemperatureValues(getTemperatureValue(d)) ?? 0}
            yScale={yTemperatureValues}
            strokeWidth={1}
            stroke="#000000"
            fill="url(#gradient)"
          />

          <AxisLeft
            scale={yTemperatureValues}
            top={0}
            left={margin.left}
            label={'Temperature (Fº)'}
            stroke={'#1b1a1e'}
          />

          <AxisBottom
            scale={xDateValues}
            top={innerHeight + margin.top}
            label={'Hour'}
            stroke={'#1b1a1e'}
          />
        </Group>
      </svg>
    </div>
  );
}