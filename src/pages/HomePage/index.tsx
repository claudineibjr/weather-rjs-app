import { useEffect, useState } from 'react';
import { WeatherDailyInfo } from '../../components/WeatherDailyInfo';
import { DailyWeatherInfo } from '../../data/model/WeatherInfo/DailyWeatherInfo';
import { loadWeekWeatherInfo } from '../../services/OpenWeatherMapApi';
import CircularProgress from '@material-ui/core/CircularProgress';
import './styles.scss';
import DefaultAppBar from '../../components/DefaultAppBar';
import { LocationUtilities } from '../../utils/locationUtils';
import UserLocation from '../../data/model/UserPreferences/UserLocation';
import { useDispatch, useSelector } from 'react-redux';
import { RootDispatcher } from '../../store/root-redux';

interface StateInterfaceProps {
    userLocation: UserLocation | undefined;
    weekWeatherInfos: Array<DailyWeatherInfo> | undefined;
}

export function HomePage() {
    const [isLoading, setLoading] = useState<boolean>(false);

    const { userLocation, weekWeatherInfos } = useSelector<StateInterfaceProps, StateInterfaceProps>((state: StateInterfaceProps) => {
        return {
            userLocation: state.userLocation,
            weekWeatherInfos: state.weekWeatherInfos,
        }
    });

    const rootDispatcher = new RootDispatcher(useDispatch());

    useEffect(() => {
        async function fetchMyAPI() {
            if (weekWeatherInfos === undefined) {
                if (userLocation !== undefined) {
                    const weekWeatherInfo = await loadWeekWeatherInfo(userLocation!.latitude, userLocation!.longitude);
                    if (weekWeatherInfo !== undefined) {
                        let weekWeatherInfos = weekWeatherInfo.daily.map((weatherInfoMap, _) => DailyWeatherInfo.fromWeatherInfoMapInterface(weatherInfoMap));
                        weekWeatherInfos.sort((weatherInfoA, weatherInfoB) => weatherInfoA.date.getTime() - weatherInfoB.date.getTime());

                        if (weekWeatherInfos.length > 5) {
                            weekWeatherInfos = weekWeatherInfos.slice(0, 5);
                        }

                        rootDispatcher.updateWeekWeatherInfos(weekWeatherInfos);
                    }
                }
            }
        }

        async function loadData() {
            await fetchMyAPI();
        }

        setLoading(true);
        loadData().then(
            () => setLoading(false)
        );

    }, [userLocation]);

    useEffect(() => {
        async function loadData() {
            await LocationUtilities.loadUserLocationIfNeeded(
                userLocation,
                rootDispatcher.updateUserLocation,
            );
        }

        setLoading(true);
        loadData().then(
            () => setLoading(false)
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