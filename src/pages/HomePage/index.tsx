import { useEffect, useState } from 'react';
import { WeatherDailyInfo } from '../../components/WeatherDailyInfo';
import { WeatherInfoMap } from '../../data/model/WeatherInfo/response/WeatherInfoMap';
import { DailyWeatherInfo } from '../../data/model/WeatherInfo/DailyWeatherInfo';
import { loadWeekWeatherInfo } from '../../services/OpenWeatherMapApi';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import './styles.scss';
import DefaultAppBar from '../../components/DefaultAppBar';

export function HomePage() {
    const [weekWeatherInfos, setWeekWeatherInfos] = useState<Array<DailyWeatherInfo>>([]);

    useEffect(() => {
        const weekWeatherInfo = loadWeekWeatherInfo();
        if (weekWeatherInfo !== undefined) {
            let weekWeatherInfos = weekWeatherInfo.daily.map((weatherInfoMap, _) => WeatherInfoMap.toDailyWeatherInfo(weatherInfoMap));
            weekWeatherInfos.sort((weatherInfoA, weatherInfoB) => weatherInfoB.date.getTime() - weatherInfoA.date.getTime());
            if (weekWeatherInfos.length > 5) {
                weekWeatherInfos = weekWeatherInfos.slice(0, 5);
            }

            setWeekWeatherInfos(weekWeatherInfos);
        }
    }, []);

    return (
        <div className="HomePageMain">
            <DefaultAppBar />

            <div className="WeekWeatherInfo">
                {weekWeatherInfos !== undefined &&
                    weekWeatherInfos.map((dayWeatherInfo, _) =>
                        <WeatherDailyInfo weatherDailyInfo={dayWeatherInfo} />
                    )
                }
            </div>
        </div>
    );
}