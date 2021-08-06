import { HourlyWeatherInfo } from '../../data/model/WeatherInfo/HourlyWeatherInfo';
import useWindowDimensions from '../../hook/useWindowDimensionsHook';
import WeatherHourlyChartComponent, { ChartScale } from './WeatherHourlyChartComponent';

type WeatherHourlyInfoProps = {
  weatherDailyInfo: Array<HourlyWeatherInfo>
  chartScale: ChartScale
}

export type AreaProps = {
  width: number;
  height: number;
  margin?: { top: number; right: number; bottom: number; left: number };
};


export const WeatherHourlyChart = ({ weatherDailyInfo, chartScale }: WeatherHourlyInfoProps) => {
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
      chartScale={chartScale}
    />
  );
}