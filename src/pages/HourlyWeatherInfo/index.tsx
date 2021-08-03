import { Component } from "react";
import { WeatherHourlyChart } from "../../components/WeatherHourlyChart";
import { HourlyWeatherInfo } from "../../data/model/WeatherInfo/HourlyWeatherInfo";
import { WeatherInfoMap } from "../../data/model/WeatherInfo/response/WeatherInfoMap";
import { loadDayWeatherInfo } from "../../services/OpenWeatherMapApi";
import './styles.scss';

interface IProps {

}

interface IState {
    dayWeatherInfos?: Array<HourlyWeatherInfo>
}

export default class HourlyWeatherInfoPage extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            dayWeatherInfos: undefined,
        };
    }

    componentDidMount = () => {
        const dayWeatherInfo = loadDayWeatherInfo();
        if (dayWeatherInfo !== undefined) {
            let dayWeatherInfos: Array<HourlyWeatherInfo> = dayWeatherInfo.hourly.map((weatherInfoMap, _) => WeatherInfoMap.toHourlyWeatherInfo(weatherInfoMap));
            dayWeatherInfos.sort((weatherInfoA, weatherInfoB) => weatherInfoA.date.getTime() - weatherInfoB.date.getTime());
            let firstOfDay: HourlyWeatherInfo = dayWeatherInfos.filter((hourlyWeatherInfo) => hourlyWeatherInfo.date.getHours() === 0)[0];
            let indexOfFirstOfDay = dayWeatherInfos.indexOf(firstOfDay);
            dayWeatherInfos = dayWeatherInfos.slice(indexOfFirstOfDay, indexOfFirstOfDay + 24);

            this.setState({ dayWeatherInfos: dayWeatherInfos });
        }
    }

    render() {
        const { dayWeatherInfos } = this.state;
        
        if (dayWeatherInfos !== undefined) {
            return (
                <div className="HourlyWeatherInfoMain">
                    <WeatherHourlyChart weatherDailyInfo={dayWeatherInfos}/>
                    {/* Carregado! */}
                </div>
            );
        }

        return (
            <div className="HourlyWeatherInfoMain">
                Loading...
            </div>
        );
    };
}