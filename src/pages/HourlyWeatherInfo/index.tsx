import { useEffect, useState } from "react";
import { WeatherHourlyChart } from "../../components/WeatherHourlyChart";
import { HourlyWeatherInfo } from "../../data/model/WeatherInfo/HourlyWeatherInfo";
import CircularProgress from '@material-ui/core/CircularProgress';
import './styles.scss';
import { Link, useRouteMatch, useHistory } from "react-router-dom";
import DefaultAppBar from "../../components/DefaultAppBar";
import { DateUtilities } from "../../utils/dateUtils";
import { LocationUtilities } from "../../utils/locationUtils";
import UserLocation from "../../data/model/UserPreferences/UserLocation";
import { useSelector, useDispatch } from "react-redux";
import { RootDispatcher } from "../../store/root-redux";
import { WeatherDataUtilities } from "../../utils/weatherDataUtilis";
import { DailyWeatherInfo } from "../../data/model/WeatherInfo/DailyWeatherInfo";
import { ButtonGroup, Button } from "@material-ui/core";

interface StateInterfaceProps {
    userLocation: UserLocation | undefined;
    hourlyWeatherInfos: Array<HourlyWeatherInfo> | undefined;
    isLoadingDetailedData?: boolean;
    weekWeatherInfos?: Array<DailyWeatherInfo>;
}

export default function HourlyWeatherInfoPage() {
    const [localHourlyWeatherInfos, setLocalHourlyWeatherInfos] = useState<Array<HourlyWeatherInfo> | undefined>(undefined);
    const [isLoading, setLoading] = useState<boolean>(false);
    const [dateAccordingToCurrentWeekDayName, setDateAccordingToCurrentWeekDayName] = useState<Date | undefined>(undefined);

    const history = useHistory();

    const { userLocation, hourlyWeatherInfos, isLoadingDetailedData, weekWeatherInfos } = useSelector<StateInterfaceProps, StateInterfaceProps>((state: StateInterfaceProps) => {
        return {
            userLocation: state.userLocation,
            hourlyWeatherInfos: state.hourlyWeatherInfos,
            isLoadingDetailedData: state.isLoadingDetailedData,
            weekWeatherInfos: state.weekWeatherInfos,
        }
    });

    const rootDispatcher = new RootDispatcher(useDispatch());

    const { path } = useRouteMatch();

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

        loadData();

    }, [userLocation]);

    useEffect(() => {
        const dateAccordingToCurrentWeekDayName = DateUtilities.getDateAccordingToCurrentWeekDayName(path);
        setDateAccordingToCurrentWeekDayName(dateAccordingToCurrentWeekDayName);

        if (hourlyWeatherInfos !== undefined && dateAccordingToCurrentWeekDayName !== undefined) {
            const date: number = dateAccordingToCurrentWeekDayName.getDate();
            const localHourlyWeatherInfos = hourlyWeatherInfos.filter((hourly) => hourly.date.getDate() === date);

            setLocalHourlyWeatherInfos(localHourlyWeatherInfos);
        }
    }, [hourlyWeatherInfos, path]);

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
        <div className="HourlyWeatherInfoMain">
            <DefaultAppBar />

            <div className="HourlyWeatherInfoChart">
                <div className="HourlyWeatherInfoChartHeader">
                    <div className="HourlyWeatherInfoChartHeaderText">
                        {dateAccordingToCurrentWeekDayName && 
                            dateAccordingToCurrentWeekDayName!.toDateString()
                        }
                    </div>

                    {weekWeatherInfos && dateAccordingToCurrentWeekDayName &&
                        <ButtonGroup className="HourlyWeatherInfoChartHeaderTextButtonGroup">                           
                            {weekWeatherInfos.map((dayWeatherInfo) => {
                                const weekDay = DateUtilities.days[dayWeatherInfo.date.getDay()];

                                const isSelected = dateAccordingToCurrentWeekDayName!.getDay() === dayWeatherInfo.date.getDay();

                                return (
                                    <Button
                                        onClick={() => {
                                            history.push(`/${weekDay}`);
                                        }}
                                        className={isSelected ? 'HourlyWeatherInfoChartHeaderTextButtonSelected' : ''}>
                                        {weekDay}
                                    </Button>
                                );
                            })}
                        </ButtonGroup>
                    }
                </div>

                {isLoadingDetailedData || isLoading ?
                    <div className="HourlyWeatherInfoChartCircularProgress">
                        <CircularProgress />
                    </div>
                    : localHourlyWeatherInfos !== undefined &&
                    <WeatherHourlyChart
                        key={localHourlyWeatherInfos[0].date.toString()}
                        weatherDailyInfo={localHourlyWeatherInfos} />
                }
            </div>
        </div>
    );
}