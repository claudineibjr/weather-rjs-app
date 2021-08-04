import { useEffect, useState } from 'react';
import { WeatherDailyInfo } from '../../components/WeatherDailyInfo';
import { WeatherInfoMap } from '../../data/model/WeatherInfo/response/WeatherInfoMap';
import { DailyWeatherInfo } from '../../data/model/WeatherInfo/DailyWeatherInfo';
import { loadWeekWeatherInfo } from '../../services/OpenWeatherMapApi';
import CircularProgress from '@material-ui/core/CircularProgress';
import './styles.scss';
import DefaultAppBar from '../../components/DefaultAppBar';
import { LocationUtilities } from '../../utils/locationUtils';
import UserLocation from '../../data/model/UserPreferences/UserLocation';
import { useDispatch, useSelector } from 'react-redux';
import { RootDispatcher, StateProps } from '../../store/root-redux';
import { StateInterface } from '../../store/root-reducer';
import UserPreferences from '../../data/model/UserPreferences/UserPreferences';
import { RSA_NO_PADDING } from 'node:constants';

interface StateInterfaceProps {
    userLocation: UserLocation | undefined;
}

export function HomePage() {
    const [weekWeatherInfos, setWeekWeatherInfos] = useState<Array<DailyWeatherInfo>>([]);
    const [isLoading, setLoading] = useState<boolean>(false);
    const [isError, setError] = useState<boolean>(false);

    const { userLocation } = useSelector<StateInterfaceProps, StateInterfaceProps>((state: StateInterfaceProps) => {
        return {
            userLocation: state.userLocation,
        }
    });

    const rootDispatcher = new RootDispatcher(useDispatch());

    useEffect(() => {
        async function fetchMyAPI() {
            if (userLocation !== undefined) {
                const weekWeatherInfo = await loadWeekWeatherInfo(userLocation!.latitude, userLocation!.longitude);
                if (weekWeatherInfo !== undefined) {
                    let weekWeatherInfos = weekWeatherInfo.daily.map((weatherInfoMap, _) => WeatherInfoMap.toDailyWeatherInfo(weatherInfoMap));
                    weekWeatherInfos.sort((weatherInfoA, weatherInfoB) => weatherInfoA.date.getTime() - weatherInfoB.date.getTime());
                    if (weekWeatherInfos.length > 5) {
                        weekWeatherInfos = weekWeatherInfos.slice(0, 5);
                    }

                    setWeekWeatherInfos(weekWeatherInfos);
                }
            } else {
                setError(false);
            }
        }

        setLoading(true);
        Promise.all([
            LocationUtilities.loadUserLocationIfNeeded(
                userLocation,
                rootDispatcher.updateUserLocation,
            ),
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
                    : weekWeatherInfos !== undefined ?
                        weekWeatherInfos.map((dayWeatherInfo, _) =>
                            <WeatherDailyInfo weatherDailyInfo={dayWeatherInfo} />
                        )
                        : isError &&
                        'Erro'
                }
            </div>
        </div>
    );
}