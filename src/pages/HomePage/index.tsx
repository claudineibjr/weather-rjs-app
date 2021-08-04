import { useEffect, useState } from 'react';
import { WeatherDailyInfo } from '../../components/WeatherDailyInfo';
import { WeatherInfoMap } from '../../data/model/WeatherInfo/response/WeatherInfoMap';
import { DailyWeatherInfo } from '../../data/model/WeatherInfo/DailyWeatherInfo';
import { loadWeekWeatherInfo } from '../../services/OpenWeatherMapApi';
import CircularProgress from '@material-ui/core/CircularProgress';
import './styles.scss';
import DefaultAppBar from '../../components/DefaultAppBar';
import { LocationUtilities } from '../../utils/locationUtils';
import { useDispatch } from 'react-redux';
import { RootDispatcher } from '../../store/root-redux';

export function HomePage() {
    const [weekWeatherInfos, setWeekWeatherInfos] = useState<Array<DailyWeatherInfo>>([]);
    const [isLoading, setLoading] = useState<boolean>(false);

    const rootDispatcher = new RootDispatcher(useDispatch());

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
            new Promise<void>(async (resolve, _) => {
                try {
                    const userLocation = await LocationUtilities.loadCurrentUserLocation();
                    rootDispatcher.updateUserLocation(userLocation);
                } catch(_) {
                } finally {
                    resolve();
                }
            }),
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