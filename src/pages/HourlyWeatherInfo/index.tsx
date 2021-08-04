import { useEffect, useState } from "react";
import { WeatherHourlyChart } from "../../components/WeatherHourlyChart";
import { HourlyWeatherInfo } from "../../data/model/WeatherInfo/HourlyWeatherInfo";
import { WeatherInfoMap } from "../../data/model/WeatherInfo/response/WeatherInfoMap";
import { loadDayWeatherInfo } from "../../services/OpenWeatherMapApi";
import CircularProgress from '@material-ui/core/CircularProgress';
import './styles.scss';
import { useRouteMatch } from "react-router-dom";
import DefaultAppBar from "../../components/DefaultAppBar";
import { DateUtilities } from "../../utils/utils";
import { LocationUtilities } from "../../utils/locationUtils";

export default function HourlyWeatherInfoPage() {
    const [dayWeatherInfos, setDayWeatherInfos] = useState<Array<HourlyWeatherInfo> | undefined>(undefined);
    const [isLoading, setLoading] = useState<boolean>(false);

    const { path } = useRouteMatch();

    const day = (): Date => DateUtilities.getDateAccordingToCurrentWeekDayName(path);

    useEffect(() => {
        async function fetchMyAPI() {
            const dayWeatherInfo = await loadDayWeatherInfo();
            if (dayWeatherInfo !== undefined) {
                let dayWeatherInfos: Array<HourlyWeatherInfo> = dayWeatherInfo.hourly.map((weatherInfoMap, _) => WeatherInfoMap.toHourlyWeatherInfo(weatherInfoMap));
                dayWeatherInfos.sort((weatherInfoA, weatherInfoB) => weatherInfoA.date.getTime() - weatherInfoB.date.getTime());
                let firstOfDay: HourlyWeatherInfo = dayWeatherInfos.filter((hourlyWeatherInfo) => hourlyWeatherInfo.date.getHours() === 0)[0];
                let indexOfFirstOfDay = dayWeatherInfos.indexOf(firstOfDay);
                dayWeatherInfos = dayWeatherInfos.slice(indexOfFirstOfDay, indexOfFirstOfDay + 24);

                setDayWeatherInfos(dayWeatherInfos);
            }

        }

        setLoading(true);
        Promise.all([
            LocationUtilities.loadCurrentUserLocation(),
            fetchMyAPI(),
        ]).then(() =>
            setLoading(false)
        );
    }, []);

    return (
        <div className="HourlyWeatherInfoMain">
            <DefaultAppBar />

            <div className="HourlyWeatherInfoChart">
                {isLoading ?
                    <CircularProgress />
                    : dayWeatherInfos !== undefined &&
                    <WeatherHourlyChart
                        weatherDailyInfo={dayWeatherInfos} />
                }
            </div>
        </div>
    );
}