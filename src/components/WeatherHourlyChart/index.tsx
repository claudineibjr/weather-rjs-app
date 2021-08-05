import { useMemo, useCallback } from 'react';
import { HourlyWeatherInfo } from '../../data/model/WeatherInfo/HourlyWeatherInfo';

import { scaleTime, scaleLinear } from '@vx/scale';
import { AxisLeft, AxisBottom } from '@vx/axis';
import { Group } from '@vx/group';
import { AreaClosed } from '@vx/shape';
import { localPoint } from '@visx/event';
import { LinearGradient } from '@vx/gradient';
import { bisector, extent, max, min } from 'd3-array';
import useWindowDimensions from '../../hook/useWindowDimensionsHook';
import { withTooltip, Tooltip, TooltipWithBounds, defaultStyles } from '@visx/tooltip';
import { WithTooltipProvidedProps } from '@visx/tooltip/lib/enhancers/withTooltip';
import WeatherHourlyChartComponent from './WeatherHourlyChartComponent';

type WeatherHourlyInfoProps = {
  weatherDailyInfo: Array<HourlyWeatherInfo>
}

type TooltipData = HourlyWeatherInfo;

export type AreaProps = {
  width: number;
  height: number;
  margin?: { top: number; right: number; bottom: number; left: number };
};


export const WeatherHourlyChart = ({ weatherDailyInfo }: WeatherHourlyInfoProps) => {
  const { width } = useWindowDimensions();

  // Dimensions
  const margin = {
    top: 30,
    left: 60,
    right: 40,
    bottom: 80,
  };

  const chartWidth = width * 0.8;
  const chartHeight = 360 + margin.top + margin.bottom;

  return (
    <WeatherHourlyChartComponent
      weatherDailyInfo={weatherDailyInfo}
      height={chartHeight}
      width={chartWidth}
      margin={margin}
    />
  );
}