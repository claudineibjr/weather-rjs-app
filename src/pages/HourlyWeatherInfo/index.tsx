import { useEffect, useState } from "react";
import { WeatherHourlyChart } from "../../components/WeatherHourlyChart";
import { HourlyWeatherInfo } from "../../data/model/WeatherInfo/HourlyWeatherInfo";
import { WeatherInfoMap } from "../../data/model/WeatherInfo/response/WeatherInfoMap";
import { loadDayWeatherInfo } from "../../services/OpenWeatherMapApi";
import './styles.scss';

export default function HourlyWeatherInfoPage() {
    const [dayWeatherInfos, setDayWeatherInfos] = useState<Array<HourlyWeatherInfo> | undefined>(undefined);

    useEffect(() => {
        const dayWeatherInfo = loadDayWeatherInfo();
        if (dayWeatherInfo !== undefined) {
            let dayWeatherInfos: Array<HourlyWeatherInfo> = dayWeatherInfo.hourly.map((weatherInfoMap, _) => WeatherInfoMap.toHourlyWeatherInfo(weatherInfoMap));
            dayWeatherInfos.sort((weatherInfoA, weatherInfoB) => weatherInfoA.date.getTime() - weatherInfoB.date.getTime());
            let firstOfDay: HourlyWeatherInfo = dayWeatherInfos.filter((hourlyWeatherInfo) => hourlyWeatherInfo.date.getHours() === 0)[0];
            let indexOfFirstOfDay = dayWeatherInfos.indexOf(firstOfDay);
            dayWeatherInfos = dayWeatherInfos.slice(indexOfFirstOfDay, indexOfFirstOfDay + 24);

            setDayWeatherInfos(dayWeatherInfos);
        }
    }, []);

    return (
        <div className="HourlyWeatherInfoMain">
            {dayWeatherInfos !== undefined ?
                <div className="HourlyWeatherInfoChart">
                    <WeatherHourlyChart
                        weatherDailyInfo={dayWeatherInfos} />
                </div>
                : 'Loading...'
            }
        </div>
    );
}