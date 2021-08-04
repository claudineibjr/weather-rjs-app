import { useEffect, useState } from 'react';
import { WeatherDailyInfo } from '../../components/WeatherDailyInfo';
import { WeatherInfoMap } from '../../data/model/WeatherInfo/response/WeatherInfoMap';
import { DailyWeatherInfo } from '../../data/model/WeatherInfo/DailyWeatherInfo';
import { loadWeekWeatherInfo } from '../../services/OpenWeatherMapApi';
import CircularProgress from '@material-ui/core/CircularProgress';
import './styles.scss';
import DefaultAppBar from '../../components/DefaultAppBar';
import { LocationUtilities } from '../../utils/locationUtils';

export function HomePage() {
    const [weekWeatherInfos, setWeekWeatherInfos] = useState<Array<DailyWeatherInfo>>([]);
    const [isLoading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        async function fetchMyAPI() {
            const weekWeatherInfo = await loadWeekWeatherInfo();
            if (weekWeatherInfo !== undefined) {
                let weekWeatherInfos = weekWeatherInfo.daily.map((weatherInfoMap, _) => WeatherInfoMap.toDailyWeatherInfo(weatherInfoMap));
                weekWeatherInfos.sort((weatherInfoA, weatherInfoB) => weatherInfoA.date.getTime() - weatherInfoB.date.getTime());
                if (weekWeatherInfos.length > 5) {
                    weekWeatherInfos = weekWeatherInfos.slice(0, 5);
                }

                setWeekWeatherInfos(weekWeatherInfos);
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
        <div className="HomePageMain">
            <DefaultAppBar />

            <div className="WeekWeatherInfo">
                {isLoading ?
                    <CircularProgress />
                    : weekWeatherInfos !== undefined &&
                    weekWeatherInfos.map((dayWeatherInfo, _) =>
                        <WeatherDailyInfo weatherDailyInfo={dayWeatherInfo} />
                    )
                }
            </div>
        </div>
    );
}