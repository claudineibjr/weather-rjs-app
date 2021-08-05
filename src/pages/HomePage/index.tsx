import { useEffect, useState } from 'react';
import { WeatherDailyInfo } from '../../components/WeatherDailyInfo';
import { DailyWeatherInfo } from '../../data/model/WeatherInfo/DailyWeatherInfo';
import { load5Days3HoursForecastWeatherInfo, loadWeekWeatherInfo } from '../../services/OpenWeatherMapApi';
import CircularProgress from '@material-ui/core/CircularProgress';
import './styles.scss';
import DefaultAppBar from '../../components/DefaultAppBar';
import { LocationUtilities } from '../../utils/locationUtils';
import UserLocation from '../../data/model/UserPreferences/UserLocation';
import { useDispatch, useSelector } from 'react-redux';
import { RootDispatcher } from '../../store/root-redux';
import { HourlyWeatherInfo } from '../../data/model/WeatherInfo/HourlyWeatherInfo';
import { WeatherDataUtilities } from '../../utils/weatherDataUtilis';

interface StateInterfaceProps {
    userLocation: UserLocation | undefined;
    weekWeatherInfos?: Array<DailyWeatherInfo>;
    hourlyWeatherInfos?: Array<HourlyWeatherInfo>;
}

export function HomePage() {
    const [isLoading, setLoading] = useState<boolean>(false);

    const { userLocation, weekWeatherInfos, hourlyWeatherInfos } = useSelector<StateInterfaceProps, StateInterfaceProps>((state: StateInterfaceProps) => {
        return {
            userLocation: state.userLocation,
            weekWeatherInfos: state.weekWeatherInfos,
            hourlyWeatherInfos: state.hourlyWeatherInfos,
        }
    });

    const rootDispatcher = new RootDispatcher(useDispatch());

    useEffect(() => {
        async function loadData() {
            await WeatherDataUtilities.fetchMyAPI(
                rootDispatcher.setIsLoadingDetailedData,
                rootDispatcher.updateHourlyWeatherInfos,
                rootDispatcher.updateUserLocation,
                rootDispatcher.updateWeekWeatherInfos,
                userLocation,
                hourlyWeatherInfos,
                weekWeatherInfos
            );
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