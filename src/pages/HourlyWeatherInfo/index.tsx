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
import { mean, min, max } from "d3-array";
import { ChartScale } from "../../components/WeatherHourlyChart/WeatherHourlyChartComponent";

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
    const [chartScale, setChartScale] = useState<ChartScale>({min: 0, max: 0});

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

            // Scales
            const getTemperatureValue = (d: HourlyWeatherInfo): number => d.temperature;

            const yMean = (mean(hourlyWeatherInfos, getTemperatureValue) || 0);
            const yMin = (min(hourlyWeatherInfos, getTemperatureValue) || 0) - yMean / 10;
            const yMax = (max(hourlyWeatherInfos, getTemperatureValue) || 0) + yMean / 10;
            setChartScale({
                min: yMin,
                max: yMax
            });

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
                    <div className="HourlyWeatherInfoChartWarningAndLoading">
                        <CircularProgress />
                    </div>
                    : userLocation === undefined ?
                        <div className="HourlyWeatherInfoChartWarningAndLoading">
                            Location is unavailable
                        </div>
                        : localHourlyWeatherInfos !== undefined && localHourlyWeatherInfos.length > 0 ?
                            <WeatherHourlyChart
                                key={localHourlyWeatherInfos[0].date.toString()}
                                weatherDailyInfo={localHourlyWeatherInfos}
                                chartScale={chartScale}/>
                            :
                            <div className="HourlyWeatherInfoChartWarningAndLoading">
                                Data is unavailable
                            </div>
                }
            </div>
        </div>
    );
}